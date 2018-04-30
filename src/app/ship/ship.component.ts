import { Component, OnInit, Input } from '@angular/core';
import { ResourceService } from '../resources/resource.service';

@Component({
  selector: 'app-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.css']
})
export class ShipComponent {

  private resources: ResourceService;

  @Input()
  data: any;

  id:number;
  sailing:boolean;
  sailTime: number = 3;
  sailGrogPrice: number = 10;
  sailGoldReward: number = 100;

  constructor(resourceService:ResourceService){
    this.resources = resourceService;
  }


  sendShip(){
    /*if(this.resources.getGrog() >= this.sailGrogPrice) {
      this.resources.addGrog(-this.sailGrogPrice);
      this.animateTo(100, this.sailTime);
      this.sailing = true;
      
      setTimeout(()=> {
        this.shipCameBack();
      }, this.sailTime * 1000);
    }*/
  }

  shipCameBack() {
    this.sailing = false;
    this.resources.addGold(this.sailGoldReward);
    
    let obj = document.getElementById("pbar"+this.data.id);
    if(obj){
      obj.style.webkitTransition = 'width 0s linear';
      obj.style.width = "0%";
    }
  }
  
  animateTo(percent:number, time:number){
    let obj = document.getElementById("pbar"+this.data.id);
    if(obj){
      let style = ('width '+time+'s linear');
      obj.style.webkitTransition = style;
      obj.style.width = percent+"%";
    }
  }
}