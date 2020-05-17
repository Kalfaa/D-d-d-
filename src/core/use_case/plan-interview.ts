import {BookRoom} from "./book-room";
import {CandidateDTO} from "../../common/dto/candidate.dto";
import {InterviewDTO} from "../../common/dto/interview.dto";
import {InterviewRepositoryInterface} from "../business/interview-repository.interface";
import {RecruiterRepositoryInterface} from "../business/recruiter-repository.interface";
import {RoomRepositoryInterface} from "../business/room-repository.interface";
import {Interview} from "../business/interview.model";

export class PlanInterview {
  constructor(
    private readonly interviewRepository: InterviewRepositoryInterface,
    private readonly recruiterRepository: RecruiterRepositoryInterface,
    private readonly roomRepository: RoomRepositoryInterface,
    private readonly bookRoomUseCase: BookRoom,
  ) {}

  plan(candidate: CandidateDTO): InterviewDTO {
    // GIVEN
    const recruiters = this.recruiterRepository.getRecruiters(
      candidate.availabilities,
      candidate.skills,
    );

    const rooms = this.roomRepository.getRooms(
      candidate.availabilities,
    );

    // WHEN
    const interview = Interview.create(recruiters, rooms, candidate);

    if (!interview) {
      throw new Error('Cannot create interview, no recruiters or rooms available');
    }

    // THEN
    this.bookRoomUseCase.book(interview.room, interview.timeInterval);
    this.interviewRepository.save(interview);
    return interview;
  }
}
