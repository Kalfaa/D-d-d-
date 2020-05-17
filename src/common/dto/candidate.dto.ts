export class CandidateDTO {
  constructor(
    public readonly name: string,
    public readonly skills: string[],
    public readonly availabilities: [Date, Date][],
  ) {}
}
