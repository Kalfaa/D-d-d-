import {RoomRepositoryInterface} from "../business/room-repository.interface";
import {RoomDTO} from "../../common/dto/room.dto";
import {RoomMapper} from "../../common/mapper/room.mapper";

export class BookRoom {
  constructor(
    private readonly roomRepository: RoomRepositoryInterface,
    private readonly roomMapper: RoomMapper,
  ) {}

  book(room: RoomDTO, timeInterval: [Date, Date]): RoomDTO {
    const roomModel = this.roomMapper.toModel(room);

    roomModel.book(timeInterval);
    this.roomRepository.save(roomModel);

    return this.roomMapper.toDTO(roomModel);
  }
}
