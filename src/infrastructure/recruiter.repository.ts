import {RecruiterRepositoryInterface} from "../core/interface/recruiter-repository.interface";
import {Recruiter} from "../core/business/employees/recruiter.model";

export class RecruiterRepository implements RecruiterRepositoryInterface {
  getRecruitersWithSkillsAndAvailabilitiesOrFail(skills: string[], availabilities: [Date, Date][]): Recruiter[] {
    return [];
  }
}
