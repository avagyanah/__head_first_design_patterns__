import { Duck, Quack, FlyNoWay } from "./Duck";

export class ModelDuck extends Duck {
  constructor() {
    super();

    this.quackBehavior = new Quack();
    this.flyBehavior = new FlyNoWay();
  }

  public display(): void {
    console.warn("Model duck display");
  }
}
