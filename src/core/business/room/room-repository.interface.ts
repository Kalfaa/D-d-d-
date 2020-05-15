import {Room} from "./room.model";
import {RoomDTO} from "../../../common/dto/room/room.dto";

export interface RoomRepositoryInterface {
   save(room: Room): undefined;

   getRoomByAvailabilities(availabilities: [Date, Date][]): {
      room: RoomDTO;
      availabilityInterval: [Date, Date];
   } | undefined;
}
