export class Room {
  constructor(
    private readonly id: string,
    private readonly availabilities: [Date, Date][],
  ) {}

  public book(interval: [Date, Date]): void {
    const availabilityIndex = this.availabilities.findIndex(
      (a) => a[0] === interval[0] && a[1] === interval[1]
    );

    if (availabilityIndex === -1) {
      throw new Error('Unknown availability');
    }

    this.availabilities.splice(availabilityIndex, 1);
  }
}
