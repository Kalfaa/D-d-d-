import { Interview } from '../../core/business/interview.model'
import {InterviewDTO} from "../dto/interview.dto";
import {Mapper} from "./mapper.interface";
import {RoomMapper} from "./room.mapper";
import {CandidateMapper} from "./candidate.mapper";
import {RecruiterMapper} from "./recruiter.mapper";

export class InterviewMapper implements Mapper<Interview, InterviewDTO> {
    constructor(
      private readonly roomMapper: RoomMapper,
      private readonly candidateMapper: CandidateMapper,
      private readonly recruiterMapper: RecruiterMapper,
    ) {}

    toDTO(model: Interview): InterviewDTO {
        return new InterviewDTO(
          model.timeInterval,
          model.room,
          model.candidate,
          model.recruiter,
          model.state,
        );
    }

    toModel(dto: InterviewDTO): Interview {
        return new Interview(
          dto.timeInterval,
          this.roomMapper.toModel(dto.room),
          this.candidateMapper.toModel(dto.candidate),
          this.recruiterMapper.toModel(dto.recruiter)
        );
    }
}

