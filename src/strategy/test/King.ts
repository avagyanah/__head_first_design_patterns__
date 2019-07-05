import { Character, SwordWeapon } from "./Character";

export class King extends Character {
  constructor() {
    super();

    this.weaponBehavior = new SwordWeapon();
  }

  public display(): void {
    console.warn("King display");
  }
}
