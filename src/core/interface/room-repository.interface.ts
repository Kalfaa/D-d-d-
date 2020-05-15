import {Room} from "../business/room/room.model";

export interface RoomRepositoryInterface {
   save(room: Room): undefined;
   getRoomsByAvailabilitiesOrFail(availabilities: [Date, Date][]): Room[];
}
