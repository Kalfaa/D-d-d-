import {InterviewState} from "../../core/business/interview.model";
import {RoomDTO} from "./room.dto";
import {CandidateDTO} from "./candidate.dto";
import {RecruiterDTO} from "./recruiter.dto";

export class InterviewDTO {
  constructor(
    public readonly timeInterval: [Date, Date],
    public readonly room: RoomDTO,
    public readonly candidate: CandidateDTO,
    public readonly recruiter: RecruiterDTO,
    public readonly state: InterviewState,
  ) {}
}
