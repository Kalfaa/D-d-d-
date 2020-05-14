import {InterviewRepositoryInterface} from "../interface/interview-repository.interface";

export class CreateInterview {
  constructor(
    private readonly interviewRepository: InterviewRepositoryInterface
  ) {}
}
