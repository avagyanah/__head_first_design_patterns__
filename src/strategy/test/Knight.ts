import { Character, SwordWeapon, NoWeapon, KnifeWeapon, BowWeapon } from "./Character";

export class Knight extends Character {
  constructor() {
    super();

    this.weaponBehavior = new BowWeapon();
  }

  public display(): void {
    console.warn("Knight display");
  }
}
