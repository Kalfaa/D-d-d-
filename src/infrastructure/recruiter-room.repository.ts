import {Recruiter} from "../core/business/employees/recruiter.model";
import {Room} from "../core/business/room/room.model";
import {RecruiterRepositoryInterface} from "../core/interface/recruiter-repository.interface";
import {RoomRepositoryInterface} from "../core/interface/room-repository.interface";
import {RecruiterRoomRepositoryInterface} from "../core/interface/recruiter-room-repository.interface";

// This is an aggregation
export class RecruiterRoomRepository implements RecruiterRoomRepositoryInterface {
  constructor(
    private readonly recruiterRepository: RecruiterRepositoryInterface,
    private readonly roomRepository: RoomRepositoryInterface,
  ) {}

  getRoomAndRecruiterWithSkillsAndAvailabilitiesOrFail(availabilities: [Date, Date][], skills: string[]): {
    room: Room;
    recruiter: Recruiter;
    timeInterval: [Date, Date];
  } {
    const recruiters = this.recruiterRepository.getRecruitersWithSkillsAndAvailabilitiesOrFail(
      skills,
      availabilities,
    );

    for (const recruiter of recruiters) {
      const rooms = this.roomRepository.getRoomsByAvailabilitiesOrFail(recruiter.availabilities);

      for (const room of rooms) {
        for (const recruiterAvailability of recruiter.availabilities) {
          if (room.isAvailable(recruiterAvailability)) {
            return {
              room,
              recruiter,
              timeInterval: recruiterAvailability,
            };
          }
        }
      }
    }

    throw new Error('Recruiter or room not found');
  }
}
