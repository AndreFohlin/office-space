import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../resource.service';

@Component({
  selector: 'app-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.css']
})
export class ShipComponent implements OnInit {

  private resources: ResourceService;
  
  constructor(resourceService:ResourceService){
    this.resources = resourceService;
  }

  ngOnInit() {
  }

  sendShip(){
    if(this.resources.getGold() >= 10) {
      this.resources.addGold(-10);
      console.log('sending ship');
      
    }
  }
  
  animateTo(percent:number, time:number){
    let obj = document.getElementById(this.data.id);
    if(obj){
      let style = ('width '+time+'s linear');
      obj.style.webkitTransition = style;
      obj.style.width = percent+"%";
      console.log(obj.style.webkitTransition);
    }
  }

}
