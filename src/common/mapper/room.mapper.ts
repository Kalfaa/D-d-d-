import { Room } from '../../core/business/room.model'
import {Mapper} from "./mapper.interface";
import {RoomDTO} from "../dto/room.dto";

export class RoomMapper implements Mapper<Room, RoomDTO> {
    toDTO(model: Room): RoomDTO {
        return new RoomDTO(model.id, model.availabilities)
    }

    toModel(dto: RoomDTO): Room {
        return new Room(dto.id, dto.availabilities)
    }
}
