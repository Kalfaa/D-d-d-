export class HrDto {
    constructor(
        public readonly name: string,
        public readonly availabilities: [Date, Date][] = [],
    ) {}
}
