export class Person {

  constructor(
    public id: number,
    public image: string,
    public name: string,
    public date: string,
    public section: string,
    public description: string,
    public thumbsUp: number,
    public thumbsDown: number
  ) { }

  calculatePercents(): {} {
    let percents = {};

    let up = Math.floor((this.thumbsUp * 100) / (this.thumbsUp + this.thumbsDown));
    let down = 100 - up;

    percents = {up: up + '%', down: down + '%'};

    return percents;
  }

  voteUp(){
    this.thumbsUp++;
  }

  voteDown() {
    this.thumbsDown++;
  }


}
