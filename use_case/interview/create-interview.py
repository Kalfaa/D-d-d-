from copy import Error

from model.interview.interview import Interview


class CreateInterview:
    def __init__(self, interview_repository, book_room):
        self.interviewRepository = interview_repository
        self.book_room = book_room

    def create(self, start_date, end_date, interviewer, position, candidate, room):
        if not position.available(candidate.skills):
            raise Error("Position not available for those skills")

        if not room.is_available(start_date, end_date):
            raise Error("Room not available")

        if not interviewer.available(start_date, end_date):
            raise Error("Interviewer not available")

        if not candidate.available(start_date, end_date):
            raise Error("Candidate not available")

        self.book_room(room, start_date, end_date, interviewer, candidate)

        self.interview_repository.save(Interview(
            start_date,
            end_date,
            interviewer,
            position,
            candidate,
            room
        ))
