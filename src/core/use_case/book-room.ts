import {InterviewRepositoryInterface} from "../business/interview/interview-repository.interface";
import {RoomRepositoryInterface} from "../business/room/room-repository.interface";
import {CandidateDTO} from "../../common/dto/candidate/candidate.dto";
import {RecruiterDTO} from "../../common/dto/employees/recruiter.dto";
import {RoomDTO} from "../../common/dto/room/room.dto";
import {RoomMapper} from "../../common/mapper/room.mapper";

export class BookRoom {
  constructor(
    private readonly interviewRepository: InterviewRepositoryInterface,
    private readonly roomRepository: RoomRepositoryInterface,
    private readonly roomMapper: RoomMapper,
  ) {}

  book(candidate: CandidateDTO, recruiter: RecruiterDTO, room: RoomDTO, timeInterval: [Date, Date]): RoomDTO {
    const roomModel = this.roomMapper.toModel(room);

    roomModel.book(timeInterval);
    this.roomRepository.save(roomModel);

    return this.roomMapper.toDTO(roomModel);
  }
}
