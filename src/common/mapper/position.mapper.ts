import { Position } from '../../core/business/position/position.model'
import {Mapper} from "./mapper.interface";
import {PositionDTO} from "../dto/position/position.dto";

export class PositionMapper implements Mapper<Position, PositionDTO> {
    toDTO(model: Position): PositionDTO {
        return new PositionDTO(model.name, model.skills);
    }

    toModel(dto: PositionDTO): Position {
        return new Position(dto.name, dto.skills);
    }
}

