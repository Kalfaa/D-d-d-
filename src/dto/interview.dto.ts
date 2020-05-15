import {Room} from "../core/business/room/room.model";
import {Candidate} from "../core/business/candidate/candidate.model";
import {Recruiter} from "../core/business/employees/recruiter.model";
import {InterviewState} from "../core/business/interview/interview.model";

export class InterviewDTO {

    constructor(
        public readonly timeInterval: [Date, Date],
        public readonly room: Room,
        public readonly candidate: Candidate,
        public readonly recruiter: Recruiter,
    ) {
    }
}
