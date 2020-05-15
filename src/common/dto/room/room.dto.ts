export class RoomDTO {
  constructor(
    public readonly id: string,
    public readonly availabilities: [Date, Date][],
  ) {}
}
