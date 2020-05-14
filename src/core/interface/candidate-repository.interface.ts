import {Candidate} from "../business/candidate/candidate.model";

export interface CandidateRepositoryInterface {
  create(name: string, skills: string[], availabilities: [Date, Date][]): Candidate;
}
