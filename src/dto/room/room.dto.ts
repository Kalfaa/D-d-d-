export class RoomDTO {
    constructor(
        private readonly id: string,
        private readonly availabilities: [Date, Date][],
    ) {}
}
