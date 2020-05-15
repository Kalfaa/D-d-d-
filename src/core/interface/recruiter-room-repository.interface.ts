import {Room} from "../business/room/room.model";
import {Recruiter} from "../business/employees/recruiter.model";

export interface RecruiterRoomRepositoryInterface {
  getRoomAndRecruiterWithSkillsAndAvailabilitiesOrFail(availabilities: [Date, Date][], skills: string[]): {
    room: Room;
    recruiter: Recruiter;
    timeInterval: [Date, Date];
  };
}
