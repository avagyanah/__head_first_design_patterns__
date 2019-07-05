import { Queen } from "./Queen";
import { King } from "./King";
import { Troll } from "./Troll";
import { Knight } from "./Knight";
import { SwordWeapon } from "./Character";

export class Test {
  constructor() {
    const queen = new Queen();
    const king = new King();
    const troll = new Troll();
    const knight = new Knight();

    queen.display();
    queen.performFight();

    king.display();
    king.performFight();

    troll.display();
    troll.performFight();

    knight.display();
    knight.performFight();

    queen.setWeapon(new SwordWeapon());
    queen.performFight();
  }
}

new Test();
