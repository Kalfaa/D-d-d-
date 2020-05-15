import { Room } from '../../business/room/room.model'
import { RoomDTO } from '../../../common/dto/room.dto'

export function RoomToRoomDTO(room: Room): RoomDTO {
    return new RoomDTO(room.id, room.availabilities)
}

export function RoomDTOToRoom(roomDTO: RoomDTO): Room {
    return new Room(roomDTO.id, roomDTO.availabilities)
}
