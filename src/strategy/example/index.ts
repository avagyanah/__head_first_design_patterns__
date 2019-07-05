import { MallardDuck } from "./MallardDuck";
import { ModelDuck } from "./ModelDuck";
import { FlyRocketPowered } from "./Duck";
import { DecoyDuck } from "./DecoyDuck";
import { RedHeadDuck } from "./RedHeadDuck";

export class Example {
  constructor() {
    const mallardDuck = new MallardDuck();
    const modelDuck = new ModelDuck();
    const decoyDuck = new DecoyDuck();
    const redHeadDuck = new RedHeadDuck();

    mallardDuck.display();
    mallardDuck.performQuack();
    mallardDuck.performFly();

    modelDuck.display();
    modelDuck.setFlyBehavior(new FlyRocketPowered());
    modelDuck.performQuack();
    modelDuck.performFly();

    decoyDuck.display();
    decoyDuck.performQuack();
    decoyDuck.performFly();

    redHeadDuck.display();
    redHeadDuck.performQuack();
    redHeadDuck.performFly();
  }
}

new Example();
