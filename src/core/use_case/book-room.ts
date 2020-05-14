import {RoomRepositoryInterface} from "../interface/room-repository.interface";

export class BookRoom {
  constructor(
    private readonly roomRepository: RoomRepositoryInterface,
  ) {}
}
