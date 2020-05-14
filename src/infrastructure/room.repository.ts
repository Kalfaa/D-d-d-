import {RoomRepositoryInterface} from "../core/interface/room-repository.interface";
import {Room} from "../core/business/room/room.model";

export class RoomRepository implements RoomRepositoryInterface {
  getRoomByAvailability(availability: [Date, Date]): Room | undefined {
    return undefined;
  }

  save(room: Room): undefined {
    return undefined;
  }
}
