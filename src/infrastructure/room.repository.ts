import {RoomRepositoryInterface} from "../core/business/room-repository.interface";
import {Room} from "../core/business/room.model";
import {RoomDTO} from "../common/dto/room.dto";
import {RoomMapper} from "../common/mapper/room.mapper";

export class RoomRepository implements RoomRepositoryInterface {
  constructor(
    private readonly roomMapper: RoomMapper,
  ) {}

  save(room: Room): undefined {
    return undefined;
  }

  getRooms(availabilities: [Date, Date][]): RoomDTO[] {
    return [].map((r) => this.roomMapper.toDTO(r));
  }
}
