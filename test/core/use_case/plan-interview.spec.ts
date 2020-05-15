import {PlanInterview} from "../../../src/core/use_case/plan-interview";
import {BookRoom} from "../../../src/core/use_case/book-room";
import {Candidate} from "../../../src/core/business/candidate/candidate.model";
import {Recruiter} from "../../../src/core/business/employees/recruiter.model";
import {Room} from "../../../src/core/business/room/room.model";
import {RecruiterMapper} from "../../../src/common/mapper/recruiter.mapper";
import {CandidateMapper} from "../../../src/common/mapper/candidate.mapper";
import {RoomMapper} from "../../../src/common/mapper/room.mapper";

const positionRepositoryMock = {
    getPositionsWithSkills: jest.fn(),
};

const interviewRepositoryMock = {
    create: jest.fn(),
    save: jest.fn(),
};

const recruiterRoomRepositoryInterface = {
    getRoomAndRecruiterWithSkillsAndAvailabilitiesOrFail: jest.fn(),
};

const bookRoomUseCase = {
    book: jest.fn(),
};

// https://jestjs.io/docs/en/es6-class-mocks

describe('Plan interview',() => {
    const roomMapper = new RoomMapper();
    const candidateMapper = new CandidateMapper();
    const recruiterMapper = new RecruiterMapper();
    let subject: PlanInterview;

    beforeEach(() => {
        subject = new PlanInterview(
          positionRepositoryMock,
          interviewRepositoryMock,
          recruiterRoomRepositoryInterface,
          bookRoomUseCase as unknown as BookRoom,
          roomMapper,
          candidateMapper,
          recruiterMapper,
        );
    });

    it('plan shall throw error if not position available',()=>{
        const candidate = new Candidate('Damien',['Laveur de carreau','PRO HTML'],[[new Date(),new Date()]]);
        positionRepositoryMock.getPositionsWithSkills.mockImplementation(()=>{return []});
        expect(() => subject.plan(candidate)).toThrow("No positions available for those skills");
    });

    it('shall plan an interview',() => {
        // GIVEN
        const availability: [Date, Date] = [new Date(), new Date()];
        const candidate = new Candidate('Damien',['PRO HTML'],[availability]);
        const recruiter = new Recruiter('Ruben',['PRO HTML'],[availability]);
        const room = new Room('Piscine avec jaccuzy',[availability]);

        positionRepositoryMock.getPositionsWithSkills.mockImplementation(() => ([{
            name: 'position1',
            skills: ['PRO HTML'],
        }]));

        recruiterRoomRepositoryInterface.getRoomAndRecruiterWithSkillsAndAvailabilitiesOrFail.mockImplementation(() => ({
            room,
            recruiter,
            timeInterval: availability,
        }));

        const fakeRoom = {};
        bookRoomUseCase.book.mockImplementation(() => fakeRoom);

        const fakeInterview = {};
        interviewRepositoryMock.create.mockImplementation(() => fakeInterview);

        // WHEN
        const result = subject.plan(candidate);

        // THEN
        expect(result).toBe(fakeInterview);

        expect(bookRoomUseCase.book).toHaveBeenCalledTimes(1);
        expect(bookRoomUseCase.book).toHaveBeenCalledWith(
          candidate,
          recruiter,
          room,
          availability
        );

        expect(interviewRepositoryMock.create).toHaveBeenCalledTimes(1);
        expect(interviewRepositoryMock.create).toHaveBeenCalledWith(
          availability,
          fakeRoom,
          candidateMapper.toModel(candidate),
          recruiterMapper.toModel(recruiter),
        );
    });
});
