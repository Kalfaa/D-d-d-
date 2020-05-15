import {CandidateDTO} from "../../../common/dto/candidate/candidate.dto";

export interface CandidateRepositoryInterface {
  create(name: string, skills: string[], availabilities: [Date, Date][]): CandidateDTO;
}
