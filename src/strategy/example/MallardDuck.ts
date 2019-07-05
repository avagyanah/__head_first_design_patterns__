import { Duck, Quack, FlyWithWings } from "./Duck";

export class MallardDuck extends Duck {
  constructor() {
    super();

    this.quackBehavior = new Quack();
    this.flyBehavior = new FlyWithWings();
  }

  public display(): void {
    console.warn("Mallard duck display");
  }
}
