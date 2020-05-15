import {PositionRepositoryInterface} from "../business/position/position-repository.interface";
import {BookRoom} from "./book-room";
import {RecruiterRoomRepositoryInterface} from "../interface/recruiter-room-repository.interface";
import {CandidateDTO} from "../../common/dto/candidate/candidate.dto";
import {InterviewDTO} from "../../common/dto/interview/interview.dto";
import {InterviewRepositoryInterface} from "../business/interview/interview-repository.interface";
import {RoomMapper} from "../../common/mapper/room.mapper";
import {CandidateMapper} from "../../common/mapper/candidate.mapper";
import {RecruiterMapper} from "../../common/mapper/recruiter.mapper";

export class PlanInterview {
  constructor(
    private readonly positionRepository: PositionRepositoryInterface,
    private readonly interviewRepository: InterviewRepositoryInterface,
    private readonly recruiterRoomRepository: RecruiterRoomRepositoryInterface,
    private readonly bookRoomUseCase: BookRoom,
    private readonly roomMapper: RoomMapper,
    private readonly candidateMapper: CandidateMapper,
    private readonly recruiterMapper: RecruiterMapper,
  ) {}

  plan(candidate: CandidateDTO): InterviewDTO {
    // GIVEN
    const availablePositions = this.positionRepository.getPositionsWithSkills(candidate.skills);

    if (availablePositions.length === 0) {
      throw new Error('No positions available for those skills');
    }

    // WHEN
    const { room, recruiter, timeInterval } = this.recruiterRoomRepository.getRoomAndRecruiterWithSkillsAndAvailabilitiesOrFail(
      candidate.availabilities,
      candidate.skills,
    );

    // THEN
    const bookedRoom = this.bookRoomUseCase.book(
      candidate,
      recruiter,
      room,
      timeInterval,
    );

    return this.interviewRepository.create(
      timeInterval,
      this.roomMapper.toModel(bookedRoom),
      this.candidateMapper.toModel(candidate),
      this.recruiterMapper.toModel(recruiter),
    );
  }
}
