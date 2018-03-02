import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Resources } from './resources';

@Injectable()
export class ResourceService {

  public goldPerSec: number = 0;
  public grogPerSec: number = 0;

  public goldObservable: Observable<number>;
  private goldSubject: Subject<number>;

  public grogObservable: Observable<number>;
  private grogSubject: Subject<number>;

  private gold: number = 40;
  private grog: number = 0;

  public goldLimit: number = 1000;
  public grogLimit: number = 100;


  constructor() {

    this.goldSubject = new Subject<number>();
    this.goldObservable = this.goldSubject.asObservable();

    this.grogSubject = new Subject<number>();
    this.grogObservable = this.grogSubject.asObservable();

    setInterval(()=>{
      this.updateResources();
    }, 1000);
  }

  private updateResources() {
    this.addGold(this.goldPerSec);
    this.addGrog(this.grogPerSec);
  }

  addGold(g: number) {
    this.gold += g;
    if(Math.min(this.gold, this.goldLimit) == this.goldLimit) {
      this.gold = this.goldLimit;
    }
    
    this.goldSubject.next(this.gold);
  }

  getRandomTradingResource(){
    return Resources[Math.floor(Math.random()*Resources.length)];
  }

  removeGold(gold: number) {
    this.gold -= gold;
    this.goldSubject.next(this.gold);
  }

  addGrog(g: number) {
    this.grog += g;
    if(Math.min(this.grog, this.grogLimit) == this.grogLimit) {
      this.grog = this.grogLimit;
    }
    this.grogSubject.next(this.grog);
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
