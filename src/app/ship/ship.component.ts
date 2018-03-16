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

  constructor(resourceService:ResourceService){
    this.resources = resourceService;
  }


  sendShip(){
    if(this.resources.getGrog() >= 10) {
      this.resources.addGrog(-10);
      this.sailing = true;
      this.animateTo(100, 5);
      setTimeout(()=>{
        this.resources.addGold(100);
        this.sailing = false;
        let obj = document.getElementById("pbar"+this.data.id);
        if(obj){
          let style = ('width '+0+'s linear');
          obj.style.webkitTransition = style;
          obj.style.width = "0%";
        }
      }, 5000);
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