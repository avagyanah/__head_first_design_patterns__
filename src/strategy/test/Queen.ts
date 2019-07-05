import { Character, SwordWeapon, NoWeapon } from "./Character";

export class Queen extends Character {
  constructor() {
    super();

    this.weaponBehavior = new NoWeapon();
  }

  public display(): void {
    console.warn("Queen display");
  }
}
