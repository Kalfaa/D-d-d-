import {Interview} from "./interview.model";
import {Room} from "../room/room.model";
import {Candidate} from "../candidate/candidate.model";
import {Recruiter} from "../employees/recruiter.model";
import {InterviewDTO} from "../../../common/dto/interview/interview.dto";

export interface InterviewRepositoryInterface {
  create(
    timeInterval: [Date, Date],
    room: Room,
    candidate: Candidate,
    recruiter: Recruiter
  ): InterviewDTO;

  save(interview: Interview): undefined;
}
