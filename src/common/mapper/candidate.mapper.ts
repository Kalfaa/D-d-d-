import { Candidate } from '../../core/business/candidate/candidate.model'
import {Mapper} from "./mapper.interface";
import {CandidateDTO} from "../dto/candidate/candidate.dto";

export class CandidateMapper implements Mapper<Candidate, CandidateDTO> {
    toDTO(model: Candidate): CandidateDTO {
        return new CandidateDTO(
          model.name,
          model.skills,
          model.availabilities
        );
    }

    toModel(dto: CandidateDTO): Candidate {
        return new Candidate(
          dto.name,
          dto.skills,
          dto.availabilities
        );
    }
}
