import {BookRoom} from "../../../src/core/use_case/book-room";
import {Candidate} from "../../../src/core/business/candidate/candidate.model";
import {Recruiter} from "../../../src/core/business/employees/recruiter.model";
import {InterviewState} from "../../../src/core/business/interview/interview.model";
import {Room} from "../../../src/core/business/room/room.model";

const interviewRepositoryMock = {
  create : jest.fn(),
};

const roomRepositoryMock = {
  getRoomByAvailabilities : jest.fn(),
};

describe('Book room',()=>{
  let subject;

  beforeEach(()=> {
    subject = new BookRoom(
      interviewRepositoryMock,
      roomRepositoryMock);
  });

  test('interview shall be created',() => {
      const candidate = new Candidate('Damien',['Laveur de carreau','PRO HTML'],[[new Date(),new Date()]]);
      const recruiter = new Recruiter('PasThéo',['Laveur de carreau','PRO HTML'],[[new Date(),new Date()]]);
      const room = new Room(1,[[new Date(),new Date()]]);
      const dateInterval = [new Date(),new Date()];
      subject.book(candidate,recruiter,room,dateInterval);
  });
});
