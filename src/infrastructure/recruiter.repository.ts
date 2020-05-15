import {RecruiterRepositoryInterface} from "../core/business/employees/recruiter-repository.interface";
import {RecruiterDTO} from "../common/dto/employees/recruiter.dto";
import {RecruiterMapper} from "../common/mapper/recruiter.mapper";

export class RecruiterRepository implements RecruiterRepositoryInterface {
  constructor(
    private readonly mapper: RecruiterMapper,
  ) {}

  getRecruitersWithSkillsAndAvailabilitiesOrFail(skills: string[], availabilities: [Date, Date][]): RecruiterDTO[] {
    return [].map((r) => this.mapper.toDTO(r));
  }
}
