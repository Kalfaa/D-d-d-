import {InterviewDTO} from "../../common/dto/interview/interview.dto";
import {InterviewRepositoryInterface} from "../business/interview/interview-repository.interface";
import {InterviewMapper} from "../../common/mapper/interview.mapper";

export class CancelInterview {
  constructor(
    private readonly interviewRepository: InterviewRepositoryInterface,
    private readonly interviewMapper: InterviewMapper,
  ) {}

  cancel(interview: InterviewDTO): void {
    const interviewModel = this.interviewMapper.toModel(interview);
    interviewModel.cancel();
    this.interviewRepository.save(interviewModel);
  }
}
