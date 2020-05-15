export class HR {
  constructor(
    public readonly name: string,
    public readonly availabilities: [Date, Date][],
  ) {}
}
