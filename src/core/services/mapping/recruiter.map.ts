import { Recruiter } from '../../business/employees/recruiter.model'
import { RecruiterDTO } from '../../../common/dto/recruiter.dto'

export function RecruiterToRecruiterDTO(recruiter: Recruiter): RecruiterDTO {
    return new RecruiterDTO(recruiter.name,
        recruiter.skills,
        recruiter.availabilities)
}

export function RecruiterDTOToRecruiter(recruiterDTO: RecruiterDTO): Recruiter {
    return new Recruiter(recruiterDTO.name,
        recruiterDTO.skills,
        recruiterDTO.availabilities)
}
