import {Room} from "./room.model";
import {RoomDTO} from "../../common/dto/room.dto";

export interface RoomRepositoryInterface {
   save(room: Room): undefined;
   getRooms(availabilities: [Date, Date][]): RoomDTO[];
}
