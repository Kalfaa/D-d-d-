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
    private readonly timeInterval: [Date, Date],
    private readonly room: Room,
    private readonly candidate: Candidate,
    private readonly recruiter: Recruiter,
  ) {}

  cancel() {
    this.state = InterviewState.CANCELLED;
  }
}
