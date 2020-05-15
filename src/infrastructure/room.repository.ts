import {RoomRepositoryInterface} from "../core/interface/room-repository.interface";
import {Room} from "../core/business/room/room.model";

export class RoomRepository implements RoomRepositoryInterface {

  getRoomByAvailabilitiesOrFail(availabilities: [Date, Date][]): Room {
    return new Room("123", []);
  }

  save(room: Room): undefined {
    return undefined;
  }
}
