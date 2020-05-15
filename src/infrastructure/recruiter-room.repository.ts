import {Recruiter} from "../core/business/employees/recruiter.model";
import {Room} from "../core/business/room/room.model";
import {RecruiterRepositoryInterface} from "../core/business/employees/recruiter-repository.interface";
import {RoomRepositoryInterface} from "../core/business/room/room-repository.interface";
import {RecruiterRoomRepositoryInterface} from "../core/interface/recruiter-room-repository.interface";
import {RoomDTO} from "../common/dto/room/room.dto";
import {RecruiterDTO} from "../common/dto/employees/recruiter.dto";
import {RoomMapper} from "../common/mapper/room.mapper";
import {RecruiterMapper} from "../common/mapper/recruiter.mapper";

// This is an aggregation
export class RecruiterRoomRepository implements RecruiterRoomRepositoryInterface {
  constructor(
    private readonly recruiterRepository: RecruiterRepositoryInterface,
    private readonly roomRepository: RoomRepositoryInterface,
  ) {}

  getRoomAndRecruiterWithSkillsAndAvailabilitiesOrFail(availabilities: [Date, Date][], skills: string[]): {
    room: RoomDTO;
    recruiter: RecruiterDTO;
    timeInterval: [Date, Date];
  } {
    const recruiters = this.recruiterRepository.getRecruitersWithSkillsAndAvailabilitiesOrFail(
      skills,
      availabilities,
    );

    for (const recruiter of recruiters) {
      const roomWithAvailability = this.roomRepository.getRoomByAvailabilities(recruiter.availabilities);

      if (roomWithAvailability) {
        return {
          room: roomWithAvailability.room,
          recruiter: recruiter,
          timeInterval: roomWithAvailability.availabilityInterval,
        };
      }
    }

    throw new Error('Recruiter or room not found');
  }
}
