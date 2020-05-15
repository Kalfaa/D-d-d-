import {Position} from "../business/position/position.model";

export interface PositionRepositoryInterface {
  getPositionsWithSkills(skills: string[]): Position[];
}
