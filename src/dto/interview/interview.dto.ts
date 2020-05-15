import {Room} from "../../core/business/room/room.model";
import {Candidate} from "../../core/business/candidate/candidate.model";
import {Recruiter} from "../../core/business/employees/recruiter.model";
import {InterviewState} from "../../core/business/interview/interview.model";

export class InterviewDTO {

    constructor(
        private readonly timeInterval: [Date, Date],
        private readonly room: Room,
        private readonly candidate: Candidate,
        private readonly recruiter: Recruiter,
    ) {
    }
}
