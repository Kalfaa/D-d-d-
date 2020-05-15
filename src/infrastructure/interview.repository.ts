import {InterviewRepositoryInterface} from "../core/business/interview/interview-repository.interface";
import {Interview} from "../core/business/interview/interview.model";
import {Recruiter} from "../core/business/employees/recruiter.model";
import {Candidate} from "../core/business/candidate/candidate.model";
import {Room} from "../core/business/room/room.model";
import {InterviewDTO} from "../common/dto/interview/interview.dto";
import {InterviewMapper} from "../common/mapper/interview.mapper";

export class InterviewRepository implements InterviewRepositoryInterface {
  constructor(
    private readonly mapper: InterviewMapper,
  ) {}

  create(
    timeInterval: [Date, Date],
    room: Room,
    candidate: Candidate,
    recruiter: Recruiter
  ): InterviewDTO {
    return this.mapper.toDTO(new Interview(
      timeInterval,
      room,
      candidate,
      recruiter,
    ));
  }

  save(interview: Interview): undefined {
    return undefined;
  }
}
