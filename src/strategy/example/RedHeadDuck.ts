import { Duck, FlyWithWings, Squeak } from "./Duck";

export class RedHeadDuck extends Duck {
  constructor() {
    super();

    this.quackBehavior = new Squeak();
    this.flyBehavior = new FlyWithWings();
  }

  public display(): void {
    console.warn("RedHead duck display");
  }
}
