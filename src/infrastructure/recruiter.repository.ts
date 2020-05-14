import {RecruiterRepositoryInterface} from "../core/interface/recruiter-repository.interface";
import {Recruiter} from "../core/business/employees/recruiter.model";

export class RecruiterRepository implements RecruiterRepositoryInterface {
  getRecruitersBySkills(skills: string[]): Recruiter[] {
    return [];
  }
}
