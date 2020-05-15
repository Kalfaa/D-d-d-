import {Interview} from "../business/interview/interview.model";
import {Room} from "../business/room/room.model";
import {Candidate} from "../business/candidate/candidate.model";
import {Recruiter} from "../business/employees/recruiter.model";

export interface InterviewRepositoryInterface {
  create(
    timeInterval: [Date, Date],
    room: Room,
    candidate: Candidate,
    recruiter: Recruiter
  ): Interview;

  save(interview: Interview): undefined;
}
