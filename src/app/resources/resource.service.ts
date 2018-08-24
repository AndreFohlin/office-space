import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { ResourceType, Resources } from './resources';

@Injectable()
export class ResourceService {

  private _usedStorage: number = 0;
  public totalStorage: number = 100;
  
  public goldPerSec: number = 0;
  public grogPerSec: number = 0;

  public goldObservable: Observable<number>;
  private goldSubject: Subject<number>;

  private gold: number = 190;
  private grog: number = 0;

  //Temporary
  public resources: any[] = [];


  constructor() {

    this.goldSubject = new Subject<number>();
    this.goldObservable = this.goldSubject.asObservable();

    Resources.forEach( r => {
      this.resources.push( Object.assign({ amount: 0}, r) );
    });

    setInterval(()=>{
      this.updateResources();
    }, 1000);
  }

  private updateResources() {
    this.addGold(this.goldPerSec);
  }

  get usedStorage(): number {
    let total = 0;
    this.resources.forEach( r => total+=r.amount );
    return total;
  }

  addGold(g: number) {
    this.gold += g;
    this.goldSubject.next(this.gold);
  }

  getRandomTradingResource(){
    return Resources[Math.floor(Math.random()*Resources.length)];
  }

  removeGold(gold: number) {
    this.gold -= gold;
    this.goldSubject.next(this.gold);
  }

  addResource( type: ResourceType, amount: number) {
    let res = this.resources.find( r => r.type === type );
    let availableAmountToAdd = Math.min(amount, this.totalStorage-this.usedStorage);
    res.amount += availableAmountToAdd;
  }

  hasGold(gold:number){
    return (this.gold >= gold);
  }

  getGold(): number {
    return this.gold;
  }

}
