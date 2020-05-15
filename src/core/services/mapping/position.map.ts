import { Position } from '../../business/position/position.model'
import { PositionDTO } from '../../../common/dto/position.dto'

export function PositionToPositionDTO(position: Position): PositionDTO {
    return new PositionDTO(position.name, position.skills)
}

export function PositionDTOToPosition(positionDTO: PositionDTO): Position {
    return new Position(positionDTO.name, positionDTO.skills)
}
