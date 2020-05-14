import {InterviewRepositoryInterface} from "../interface/interview-repository.interface";
import {Candidate} from "../business/candidate/candidate.model";
import {RecruiterRepositoryInterface} from "../interface/recruiter-repository.interface";
import {RoomRepositoryInterface} from "../interface/room-repository.interface";
import {Interview} from "../business/interview/interview.model";

export class CreateInterview {
  constructor(
    private readonly interviewRepository: InterviewRepositoryInterface,
    private readonly recruiterRepository: RecruiterRepositoryInterface,
    private readonly roomRepository: RoomRepositoryInterface,
    private readonly interview: Interview
  ) {}

  planInterview(candidate: Candidate) {
    interview = create(candidate, this.recruiterRepository, this.roomRepository, this.interviewRepository);
  }

  // TODO : annuler


}
