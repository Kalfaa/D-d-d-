import { HR } from '../../business/employees/hr.model'
import { HRDTO } from '../../../common/dto/hr.dto'

export function HRToHRDTO(hr: HR): HRDTO {
    return new HRDTO(hr.name, hr.availabilities)
}

export function HRDTOToRH(rhDTO: HRDTO): HR {
    return new HR(rhDTO.name, rhDTO.availabilities)
}
