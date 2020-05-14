export class Recruiter {
  constructor(
    private readonly name: string,
    private readonly skills: string[],
    private readonly availabilities: [Date, Date][] =[],
  ) {

  }

  public isAvailable(startDate: Date, endDate: Date): boolean {
    for (const [startDateAvailability, endDateAvailability] of this.availabilities) {
      if (startDate >= startDateAvailability && endDate <= endDateAvailability)  {
        return true;
      }
    }

    return false;
  }
}
