import {PositionRepositoryInterface} from "../core/interface/position-repository.interface";
import {Position} from "../core/business/position/position.model";

export class PositionRepository implements PositionRepositoryInterface {
  getPositionsWithSkills(skills: string[]): Position[] {
    return [];
  }
}
