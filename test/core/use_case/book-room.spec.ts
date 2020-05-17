import {BookRoom} from "../../../src/core/use_case/book-room";
import {Candidate} from "../../../src/core/business/candidate.model";
import {Recruiter} from "../../../src/core/business/recruiter.model";
import {InterviewState} from "../../../src/core/business/interview.model";
import {Room} from "../../../src/core/business/room.model";
import {RoomMapper} from "../../../src/common/mapper/room.mapper";
import {RoomDTO} from "../../../src/common/dto/room.dto";


const roomRepositoryMock = {
  getRooms : jest.fn(),
    save:jest.fn()
};

const roomMapperMock = {
    toModel:jest.fn(),
    toDTO: jest.fn()
};

describe('Book room',()=>{
  let subject:BookRoom;

  beforeEach(()=> {
    subject = new BookRoom(roomRepositoryMock,roomMapperMock);
  });

  test('Room shall be booked',() => {
      const dateInterval: [Date, Date] = [new Date(), new Date()];
      const room = new Room("e",[dateInterval]);
      const roomDTO:RoomDTO= new RoomDTO(room.id,room.availabilities);
      roomMapperMock.toModel.mockImplementation(()=>{return room});
      roomMapperMock.toDTO.mockImplementation(()=>{return roomDTO});

      const result = subject.book(room,dateInterval);

      expect(result).toBe(roomDTO);
  });
});
