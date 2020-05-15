import {RoomRepositoryInterface} from "../core/business/room/room-repository.interface";
import {Room} from "../core/business/room/room.model";
import {RoomDTO} from "../common/dto/room/room.dto";
import {RoomMapper} from "../common/mapper/room.mapper";

export class RoomRepository implements RoomRepositoryInterface {
  constructor(
    private readonly roomMapper: RoomMapper,
  ) {}

  save(room: Room): undefined {
    return undefined;
  }

  getRoomByAvailabilities(availabilities: [Date, Date][]): { room: RoomDTO; availabilityInterval: [Date, Date] } | undefined {
    return undefined;
  }
}
