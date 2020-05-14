import { CandidateRepositoryInterface } from "../core/interface/candidate-repository.interface";
import {Candidate} from "../core/business/candidate/candidate.model";

export class CandidateRepository implements CandidateRepositoryInterface {
  create(name: string, skills: string[], availabilities: [Date, Date][]): Candidate {
    return new Candidate(name, skills, availabilities);
  }
}
