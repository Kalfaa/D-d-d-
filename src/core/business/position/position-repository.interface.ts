import {PositionDTO} from "../../../common/dto/position/position.dto";

export interface PositionRepositoryInterface {
  getPositionsWithSkills(skills: string[]): PositionDTO[];
}
