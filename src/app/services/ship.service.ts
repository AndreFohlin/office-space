import { Injectable } from '@angular/core';
import { Ship } from '../ship/ship.model';

@Injectable()
export class ShipService {

  public ships: any[];

  constructor() { 
    this.ships = [];
    this.createShip();
  }

  public getInactiveShips(): number {
    let inactiveShips = this.ships.filter( ship => !ship.active );
    return inactiveShips.length;
  }

  public createShip() {
    let ship = new Ship(this.ships.length);
    this.ships.push(ship);
  }
}
