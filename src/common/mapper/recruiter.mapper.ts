import { Recruiter } from '../../core/business/recruiter.model'
import {Mapper} from "./mapper.interface";
import {RecruiterDTO} from "../dto/recruiter.dto";

export class RecruiterMapper implements Mapper<Recruiter, RecruiterDTO> {
    toDTO(model: Recruiter): RecruiterDTO {
        return new RecruiterDTO(
          model.name,
          model.skills,
          model.availabilities
        );
    }

    toModel(dto: RecruiterDTO): Recruiter {
        return new Recruiter(
          dto.name,
          dto.skills,
          dto.availabilities
        );
    }
}
