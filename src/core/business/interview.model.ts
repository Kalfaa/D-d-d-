import {Room} from "./room.model";
import {Candidate} from "./candidate.model";
import {Recruiter} from "./recruiter.model";
import {RecruiterDTO} from "../../common/dto/recruiter.dto";
import {RoomDTO} from "../../common/dto/room.dto";
import {CandidateDTO} from "../../common/dto/candidate.dto";
import {RoomMapper} from "../../common/mapper/room.mapper";

export enum InterviewState {
  "CREATED",
  "CANCELLED"
}

export class Interview {
  public state: InterviewState = InterviewState.CREATED;

  constructor(
    public readonly timeInterval: [Date, Date],
    public readonly room: Room,
    public readonly candidate: Candidate,
    public readonly recruiter: Recruiter,
  ) {}

  cancel() {
    this.state = InterviewState.CANCELLED;
  }

  static create(recruiters: RecruiterDTO[], rooms: RoomDTO[], candidate: CandidateDTO): Interview | undefined {
    const roomMapper = new RoomMapper();

    for (const recruiter of recruiters) {
      for (const room of rooms) {
        const roomModel = roomMapper.toModel(room);

        for (const availability of recruiter.availabilities) {
          if (roomModel.isAvailable(availability)) {
            return new Interview(
              availability,
              roomModel,
              candidate,
              recruiter
            );
          }
        }
      }
    }
  }
}

