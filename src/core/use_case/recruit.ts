import {Candidate} from "../business/candidate/candidate.model";
import {PositionRepositoryInterface} from "../interface/position-repository.interface";
import {PlanInterview} from "./plan-interview";
import {RecruiterRoomRepositoryInterface} from "../interface/recruiter-room-repository.interface";

export class Recruit {
  constructor(
    private readonly positionRepository: PositionRepositoryInterface,
    private readonly recruiterRoomRepository: RecruiterRoomRepositoryInterface,
    private readonly planInterviewUseCase: PlanInterview,
  ) {}

  recruit(candidate: Candidate) {
    // GIVEN
    const availablePositions = this.positionRepository.getPositionsWithSkills(candidate.skills);

    if (availablePositions.length === 0) {
      throw new Error('No positions available for those skills');
    }

    // WHEN
    const { room, recruiter, timeInterval } = this.recruiterRoomRepository.getRoomAndRecruiterWithSkillsAndAvailabilitiesOrFail(
      candidate.availabilities,
      candidate.skills,
    );

    // THEN
    this.planInterviewUseCase.plan(
      candidate,
      recruiter,
      room,
      timeInterval,
    );
  }
}
