import {InterviewRepositoryInterface} from "../interface/interview-repository.interface";
import {Candidate} from "../business/candidate/candidate.model";
import {RecruiterRepositoryInterface} from "../interface/recruiter-repository.interface";
import {RoomRepositoryInterface} from "../interface/room-repository.interface";
import {Interview} from "../business/interview/interview.model";

export class CreateInterview {
  constructor(
    private readonly interviewRepository: InterviewRepositoryInterface,
    private readonly recruiterRepository: RecruiterRepositoryInterface,
    private readonly roomRepository: RoomRepositoryInterface,
  ) {}

  plan(candidate: Candidate): Interview {
    const recruiters = this.recruiterRepository.getRecruitersBySkills(
      candidate.skills
    );

    if (recruiters.length === 0) {
      throw new Error('No recruiter available for those skills');
    }

    for (const availability of candidate.availabilities) {
      const availableRecruiter = recruiters.find((r) => r.isAvailable(availability[0], availability[1]));

      if (availableRecruiter) {
        const availableRoom = this.roomRepository.getRoomByAvailability(availability);

        if (availableRoom) {
          availableRoom.book(availability);
          this.roomRepository.save(availableRoom);

          return this.interviewRepository.create(
            availability,
            availableRoom,
            candidate,
            availableRecruiter
          );
        }
      }
    }

    throw new Error('No room or recruiter available');
  }
}
