import {Room} from "../business/room/room.model";

export interface RoomRepositoryInterface {
   save(room: Room): undefined;
   getRoomByAvailability(availability: [Date, Date]): Room | undefined;
}
