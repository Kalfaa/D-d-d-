import {Recruiter} from "../business/employees/recruiter.model";

export interface RecruiterRepositoryInterface {
  getRecruitersBySkills(skills: string[]): Recruiter[];
}
