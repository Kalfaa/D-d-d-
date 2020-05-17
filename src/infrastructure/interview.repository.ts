import {InterviewRepositoryInterface} from "../core/business/interview-repository.interface";
import {Interview} from "../core/business/interview.model";
import {InterviewMapper} from "../common/mapper/interview.mapper";

export class InterviewRepository implements InterviewRepositoryInterface {
  constructor(
    private readonly mapper: InterviewMapper,
  ) {}

  save(interview: Interview): undefined {
    return undefined;
  }
}
