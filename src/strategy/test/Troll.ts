import { Character, SwordWeapon, NoWeapon, KnifeWeapon } from "./Character";

export class Troll extends Character {
  constructor() {
    super();

    this.weaponBehavior = new KnifeWeapon();
  }

  public display(): void {
    console.warn("Troll display");
  }
}
