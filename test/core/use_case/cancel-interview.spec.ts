import {CancelInterview} from "../../../src/core/use_case/cancel-interview";
import {InterviewState} from "../../../src/core/business/interview.model";
import {InterviewDTO} from "../../../src/common/dto/interview.dto";
import {InterviewMapper} from "../../../src/common/mapper/interview.mapper";
import {InterviewRepository} from "../../../src/infrastructure/interview.repository";
import {RoomMapper} from "../../../src/common/mapper/room.mapper";
import {CandidateMapper} from "../../../src/common/mapper/candidate.mapper";
import {RecruiterMapper} from "../../../src/common/mapper/recruiter.mapper";

const interviewRepositoryMock = {
  save: jest.fn(),
};

describe('Cancel interview', () => {
  const roomMapper = new RoomMapper();
  const candidateMapper = new CandidateMapper();
  const recruiterMapper = new RecruiterMapper();
  let cancelInterview: CancelInterview;

  beforeEach(() => {
    cancelInterview = new CancelInterview(
      interviewRepositoryMock as unknown as InterviewRepository,
      new InterviewMapper(roomMapper, candidateMapper, recruiterMapper),
    );
  });

  it('cancels an interview', () => {
    // GIVEN
    const interview = {
      candidate: {},
      recruiter: {},
      room: {},
      state: InterviewState.CREATED,
      timeInterval: [new Date(), new Date()],
    } as InterviewDTO;

    // WHEN
    cancelInterview.cancel(interview);

    // THEN
    expect(interviewRepositoryMock.save).toHaveBeenCalledTimes(1);
    expect(interviewRepositoryMock.save.mock.calls[0][0].state).toEqual(InterviewState.CANCELLED);
  });
});
