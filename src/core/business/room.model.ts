export class Room {
  constructor(
    public readonly id: string,
    public readonly availabilities: [Date, Date][],
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

  public isAvailable(interval: [Date, Date]): boolean {
    return this.availabilities.some((a) => a[0] <= interval[0] && a[1] <= interval[1]);
  }
}

