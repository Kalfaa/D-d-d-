export class HR {
  constructor(
    private readonly name: string,
    private readonly availabilities: [Date, Date][],
  ) {}
}
