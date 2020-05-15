import {Room} from "../room/room.model";
import {Candidate} from "../candidate/candidate.model";
import {Recruiter} from "../employees/recruiter.model";

export enum InterviewState {
  "CREATED",
  "CANCELLED"
}

export class Interview {
  private  state: InterviewState = InterviewState.CREATED;

  constructor(
    public readonly timeInterval: [Date, Date],
    public readonly room: Room,
    public readonly candidate: Candidate,
    public readonly recruiter: Recruiter,
  ) {}

  cancel() {
    this.state = InterviewState.CANCELLED;
  }
}
