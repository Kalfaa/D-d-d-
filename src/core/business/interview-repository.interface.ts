import {Interview} from "./interview.model";
import {Room} from "./room.model";
import {Candidate} from "./candidate.model";
import {Recruiter} from "./recruiter.model";
import {InterviewDTO} from "../../common/dto/interview.dto";

export interface InterviewRepositoryInterface {
  save(interview: Interview): undefined;
}
