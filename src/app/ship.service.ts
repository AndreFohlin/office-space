import { Injectable } from '@angular/core';

@Injectable()
export class ShipService {

  public ships: any[];

  constructor() { 
    this.ships = [];
  }

  public getInactiveShips(): number {
    let inactiveShips = this.ships.filter( ship => !ship.active );
    return inactiveShips.length;
  }

  public createShip() {
    this.ships.push({
      active: false,
      id: this.ships.length
    });
  }
}
