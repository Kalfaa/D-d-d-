import { Candidate } from '../../business/candidate/candidate.model'
import { CandidateDTO } from '../../../common/dto/candidate.dto'

export function CandidateToCandidateDTO(candidate: Candidate): CandidateDTO {
    return new CandidateDTO(candidate.name,
        candidate.skills,
        candidate.availabilities)
}

export function CandidateDTOToCandidate(candidateDTO: CandidateDTO): Candidate {
    return new Candidate(candidateDTO.name,
        candidateDTO.skills,
        candidateDTO.availabilities)
}
