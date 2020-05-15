import {RoomDTO} from "../../common/dto/room/room.dto";
import {RecruiterDTO} from "../../common/dto/employees/recruiter.dto";

export interface RecruiterRoomRepositoryInterface {
  getRoomAndRecruiterWithSkillsAndAvailabilitiesOrFail(availabilities: [Date, Date][], skills: string[]): {
    room: RoomDTO;
    recruiter: RecruiterDTO;
    timeInterval: [Date, Date];
  };
}

