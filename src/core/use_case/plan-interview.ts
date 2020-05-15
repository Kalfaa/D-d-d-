import {InterviewRepositoryInterface} from "../interface/interview-repository.interface";
import {Candidate} from "../business/candidate/candidate.model";
import {RecruiterRepositoryInterface} from "../interface/recruiter-repository.interface";
import {RoomRepositoryInterface} from "../interface/room-repository.interface";
import {Interview} from "../business/interview/interview.model";
import {Recruiter} from "../business/employees/recruiter.model";
import {Room} from "../business/room/room.model";

export class PlanInterview {
  constructor(
    private readonly interviewRepository: InterviewRepositoryInterface,
    private readonly roomRepository: RoomRepositoryInterface,
  ) {}

  plan(candidate: Candidate, recruiter: Recruiter, room: Room, timeInterval: [Date, Date]): Interview {
    room.book(timeInterval);
    this.roomRepository.save(room);

    return this.interviewRepository.create(
      timeInterval,
      room,
      candidate,
      recruiter
    );
  }

  cancel(interview: Interview): void {
    interview.cancel();
    this.interviewRepository.save(interview);
  }
}
