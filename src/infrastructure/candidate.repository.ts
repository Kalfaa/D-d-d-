import { CandidateRepositoryInterface } from "../core/business/candidate-repository.interface";
import {Candidate} from "../core/business/candidate.model";
import {CandidateDTO} from "../common/dto/candidate.dto";
import {CandidateMapper} from "../common/mapper/candidate.mapper";

export class CandidateRepository implements CandidateRepositoryInterface {
  constructor(
    private readonly mapper: CandidateMapper,
  ) {}

  create(name: string, skills: string[], availabilities: [Date, Date][]): CandidateDTO {
    return this.mapper.toDTO(new Candidate(name, skills, availabilities));
  }
}
