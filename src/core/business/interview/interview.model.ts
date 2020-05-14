import {Room} from "../room/room.model";
import {Candidate} from "../candidate/candidate.model";
import {Recruiter} from "../employees/recruiter.model";
import {RecruiterRepositoryInterface} from "../../interface/recruiter-repository.interface";
import {RoomRepositoryInterface} from "../../interface/room-repository.interface";
import {InterviewRepositoryInterface} from "../../interface/interview-repository.interface";

export class Interview {
  constructor(
    private readonly timeInterval: [Date, Date],
    private readonly room: Room,
    private readonly candidate: Candidate,
    private readonly recruiter: Recruiter,
  ) {}

  create(candidate: Candidate,
       recruiterRepository: RecruiterRepositoryInterface,
       roomRepository: RoomRepositoryInterface,
       interviewRepository: InterviewRepositoryInterface
  ): Interview {
    const recruiters = recruiterRepository.getRecruitersBySkills(
        candidate.skills
    );

    if (recruiters.length === 0) {
      throw new Error('No recruiter available for those skills');
    }

    for (const availability of candidate.availabilities) {
      const availableRecruiter = recruiters.find((r) => r.isAvailable(availability[0], availability[1]));

      if (availableRecruiter) {
        const availableRoom = roomRepository.getRoomByAvailability(availability);

        if (availableRoom) {
          availableRoom.book(availability);
          roomRepository.save(availableRoom);

          return interviewRepository.create(
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
