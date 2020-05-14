import {Room} from "../room/room.model";
import {Candidate} from "../candidate/candidate.model";
import {Recruiter} from "../employees/recruiter.model";

export class Interview {
  constructor(
    private readonly timeInterval: [Date, Date],
    private readonly room: Room,
    private readonly candidate: Candidate,
    private readonly recruiter: Recruiter,
  ) {}
}
