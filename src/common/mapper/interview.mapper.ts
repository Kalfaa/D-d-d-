import { Interview } from '../../core/business/interview/interview.model'
import {InterviewDTO} from "../dto/interview/interview.dto";
import {Mapper} from "./mapper.interface";

export class InterviewMapper implements Mapper<Interview, InterviewDTO> {
    toDTO(model: Interview): InterviewDTO {
        return new InterviewDTO(
          model.timeInterval,
          model.room,
          model.candidate,
          model.recruiter
        );
    }

    toModel(dto: InterviewDTO): Interview {
        return new Interview(
          dto.timeInterval,
          dto.room,
          dto.candidate,
          dto.recruiter
        )
    }
}
