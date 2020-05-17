import {RecruiterRepositoryInterface} from "../core/business/recruiter-repository.interface";
import {RecruiterDTO} from "../common/dto/recruiter.dto";
import {RecruiterMapper} from "../common/mapper/recruiter.mapper";

export class RecruiterRepository implements RecruiterRepositoryInterface {
  constructor(
    private readonly mapper: RecruiterMapper,
  ) {}

  getRecruiters(availabilities: [Date, Date][], skills: string[]): RecruiterDTO[] {
    return [].map((r) => this.mapper.toDTO(r));
  }
}
