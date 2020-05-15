import { HR } from '../../core/business/employees/hr.model'
import {Mapper} from "./mapper.interface";
import {HrDto} from "../dto/employees/hr.dto";

export class HrMapper implements Mapper<HR, HrDto> {
    toDTO(model: HR): HrDto {
        return new HrDto(model.name, model.availabilities);
    }

    toModel(dto: HrDto): HR {
        return new HR(dto.name, dto.availabilities)
    }
}
