import { Interview } from '../../business/interview/interview.model'
import { InterviewDTO } from '../../../common/dto/interview.dto'

export function InterviewToInterviewDTO(interview: Interview): InterviewDTO {
    return new InterviewDTO(interview.timeInterval,
        interview.room,
        interview.candidate,
        interview.recruiter)
}

export function InterviewDTOToInterview(interviewDTO: InterviewDTO): Interview {
    return new Interview(interviewDTO.timeInterval,
        interviewDTO.room,
        interviewDTO.candidate,
        interviewDTO.recruiter)
}
