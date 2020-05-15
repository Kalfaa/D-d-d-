import {PositionRepositoryInterface} from "../core/business/position/position-repository.interface";
import {PositionDTO} from "../common/dto/position/position.dto";
import {PositionMapper} from "../common/mapper/position.mapper";

export class PositionRepository implements PositionRepositoryInterface {
  constructor(
    private readonly mapper: PositionMapper,
  ) {}

  getPositionsWithSkills(skills: string[]): PositionDTO[] {
    return [].map((p) => this.mapper.toDTO(p));
  }
}
