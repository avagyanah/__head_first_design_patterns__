export interface IWeaponBehavior {
  punch(): void;
}

export abstract class Character {
  protected weaponBehavior: IWeaponBehavior;

  public abstract display(): void;

  public performFight(): void {
    this.weaponBehavior.punch();
  }

  public setWeapon(wp: IWeaponBehavior): void {
    this.weaponBehavior = wp;
  }
}

export class BowWeapon implements IWeaponBehavior {
  public punch(): void {
    console.log("Bow Punch!");
  }
}

export class AxeWeapon implements IWeaponBehavior {
  public punch(): void {
    console.log("Axe Punch!");
  }
}

export class KnifeWeapon implements IWeaponBehavior {
  public punch(): void {
    console.log("Knife Punch!");
  }
}

export class SwordWeapon implements IWeaponBehavior {
  public punch(): void {
    console.log("Sword Punch!");
  }
}

export class NoWeapon implements IWeaponBehavior {
  public punch(): void {
    console.log("No Punch!");
  }
}
