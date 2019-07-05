import { Duck, MuteQuack, FlyNoWay } from "./Duck";

export class DecoyDuck extends Duck {
  constructor() {
    super();

    this.quackBehavior = new MuteQuack();
    this.flyBehavior = new FlyNoWay();
  }

  public display(): void {
    console.warn("Decoy duck display");
  }
}
