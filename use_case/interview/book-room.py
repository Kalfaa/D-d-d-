class BookRoom:
    def __init__(self, room_repository):
        self.room_repository = room_repository

    def book_room(self, room, start_date, end_date, interviewer, candidate):
        room.book(start_date, end_date, interviewer, candidate)
        self.room_repository.save(room)
