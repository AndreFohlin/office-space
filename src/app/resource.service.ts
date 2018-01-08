import { Injectable } from '@angular/core';

@Injectable()
export class ResourceService {
  public goldPerSec: number = 1;
  public grogPerSec: number = 0;
  private gold: number = 0;
  private grog: number = 0;


  constructor() {
    setInterval(()=>{
      this.gold += this.goldPerSec;
      this.grog += this.grogPerSec;
    }, 1000);
  }

  addGold(gold: number) {
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
