import {RecruiterDTO} from "../../../common/dto/employees/recruiter.dto";

export interface RecruiterRepositoryInterface {
  getRecruitersWithSkillsAndAvailabilitiesOrFail(skills: string[], availabilities: [Date, Date][]): RecruiterDTO[];
}
