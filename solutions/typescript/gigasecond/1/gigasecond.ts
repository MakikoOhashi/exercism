export class Gigasecond {

  constructor (private startDate:Date){};
  public date(/* Parameters go here */):Date {
    return new Date(+this.startDate +1e9*1000);
  };
}
