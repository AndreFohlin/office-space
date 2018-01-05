import { Injectable } from '@angular/core';

@Injectable()
export class ResourceService {
  private gold: number = 0;
  private grog: number = 0;

  constructor() { }

  addGold(gold: number) {
    console.log('adding',gold);
    this.gold += gold;
  }

  addGrog(grog: number) {
    this.grog += grog;
  }

  hasGold(gold:number){
    return (this.gold >= gold);
  }

  hasGrog(grog:number){
    return (this.grog >= grog);
  }

  getGold(): number {
    return this.gold;
  }

  getGrog(): number {
    return this.grog;
  }
}
