import {PlanInterview} from "../../../src/core/use_case/plan-interview";
import {BookRoom} from "../../../src/core/use_case/book-room";
import {Candidate} from "../../../src/core/business/candidate.model";
import {Recruiter} from "../../../src/core/business/recruiter.model";
import {Room} from "../../../src/core/business/room.model";
import {RecruiterMapper} from "../../../src/common/mapper/recruiter.mapper";
import {CandidateMapper} from "../../../src/common/mapper/candidate.mapper";
import {RoomMapper} from "../../../src/common/mapper/room.mapper";
import {RoomRepository} from "../../../src/infrastructure/room.repository";
import {Interview} from "../../../src/core/business/interview.model";

const interviewRepositoryMock = {
    save: jest.fn(),
};

const recruiterRoomRepositoryMock = {
    getRecruiters: jest.fn(),
};

const bookRoomUseCase = {
    book: jest.fn(),
};

const roomRepositoryMock = {
    getRooms: jest.fn(),
};

// https://jestjs.io/docs/en/es6-class-mocks

describe('Plan interview',() => {
    const roomMapper = new RoomMapper();
    const candidateMapper = new CandidateMapper();
    const recruiterMapper = new RecruiterMapper();
    let subject: PlanInterview;

    beforeEach(() => {
        subject = new PlanInterview(
          interviewRepositoryMock,
          recruiterRoomRepositoryMock,
          roomRepositoryMock as unknown as RoomRepository,
          bookRoomUseCase as unknown as BookRoom,
        );
    });

    it('shall plan an interview',() => {
        // GIVEN
        const availability: [Date, Date] = [new Date(), new Date()];
        const candidate = new Candidate('Damien',['PRO HTML'],[availability]);
        const recruiter = new Recruiter('Ruben',['PRO HTML'],[availability]);
        const room = new Room('Piscine avec jaccuzy',[availability]);

        recruiterRoomRepositoryMock.getRecruiters.mockImplementation(() => [recruiter]);
        roomRepositoryMock.getRooms.mockImplementation(() => [room]);

        const fakeRoom = {};
        bookRoomUseCase.book.mockImplementation(() => fakeRoom);

        interviewRepositoryMock.save.mockImplementation(() => undefined);

        // WHEN
        const result = subject.plan(candidate);

        // THEN
        expect(result).toBeInstanceOf(Interview);

        expect(bookRoomUseCase.book).toHaveBeenCalledTimes(1);
        expect(bookRoomUseCase.book).toHaveBeenCalledWith(room, availability);

        expect(interviewRepositoryMock.save).toHaveBeenCalledTimes(1);
        expect(interviewRepositoryMock.save).toHaveBeenCalledWith(result);
    });
});
