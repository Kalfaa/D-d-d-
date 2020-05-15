import {Recruiter} from "../business/employees/recruiter.model";

export interface RecruiterRepositoryInterface {
  getRecruitersWithSkillsAndAvailabilitiesOrFail(skills: string[], availabilities: [Date, Date][]): Recruiter[];
}
