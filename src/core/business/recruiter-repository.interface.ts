import {RecruiterDTO} from "../../common/dto/recruiter.dto";

export interface RecruiterRepositoryInterface {
  getRecruiters(availabilities: [Date, Date][], skills: string[]): RecruiterDTO[];
}
