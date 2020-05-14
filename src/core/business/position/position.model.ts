import {Candidate} from "../candidate/candidate.model";

export class Position {
  constructor(
    private readonly name: string,
    private readonly skills: string[],
  ) {}
}
