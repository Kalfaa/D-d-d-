import {InterviewRepositoryInterface} from "../core/interface/interview-repository.interface";
import {Interview} from "../core/business/interview/interview.model";
import {Recruiter} from "../core/business/employees/recruiter.model";
import {Candidate} from "../core/business/candidate/candidate.model";
import {Room} from "../core/business/room/room.model";

export class InterviewRepository implements InterviewRepositoryInterface {
  create(
    timeInterval: [Date, Date],
    room: Room,
    candidate: Candidate,
    recruiter: Recruiter
  ): Interview {
    return new Interview(
      timeInterval,
      room,
      candidate,
      recruiter,
    );
  }
}
