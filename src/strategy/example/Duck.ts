export interface IFlyable {
  fly: () => void;
}
export interface IQuackable {
  quack: () => void;
}

export abstract class Duck {
  protected quackBehavior: IQuackBehavior;
  protected flyBehavior: IFlyBehavior;

  public swim(): void {
    console.log("All ducks float even decoys!");
  }

  public performFly(): void {
    this.flyBehavior.fly();
  }

  public performQuack(): void {
    this.quackBehavior.quack();
  }

  public setFlyBehavior(fb: IFlyBehavior): void {
    this.flyBehavior = fb;
  }

  public setQuackBehavior(qb: IQuackBehavior): void {
    this.quackBehavior = qb;
  }

  public abstract display(): void;
}

// Fly behavior
export interface IFlyBehavior {
  fly: () => void;
}

export class FlyWithWings implements IFlyBehavior {
  fly() {
    console.log("I'm flying");
  }
}

export class FlyNoWay implements IFlyBehavior {
  fly() {
    console.log("I can't fly");
  }
}

export class FlyRocketPowered implements IFlyBehavior {
  fly() {
    console.log("I'm flying with a rocket");
  }
}

// Quack behavior
export interface IQuackBehavior {
  quack: () => void;
}

export class Quack implements IQuackBehavior {
  quack() {
    console.log("Quack!");
  }
}

export class Squeak implements IQuackBehavior {
  quack() {
    console.log("Squeak");
  }
}

export class MuteQuack implements IQuackBehavior {
  quack() {
    console.log("I can't quack");
  }
}
