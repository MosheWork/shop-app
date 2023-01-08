export class Item {
  public name: string;
  public price: number;
  public description: string;
  public pic: string;
  public counter: number;

  constructor(
    name: string,
    price: number,
    counter: number,
    description: string,
    pic: string
  ) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.pic = pic;
    this.counter = counter;
  }
}
