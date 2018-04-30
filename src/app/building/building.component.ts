import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  Buildings
} from './buildings/building-templates';
import {
  BuildingService
} from '../services/building.service';
import { ResourceService } from '../resources/resource.service';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.css'],
})
export class BuildingComponent implements OnInit {

  @Input() template: any;
  @Input() disabled: boolean;

  private buildingService: BuildingService;
  private resourceService: ResourceService;
  private building: boolean;
  private built: boolean;
  private cycleMs: number = 1000;
  private currentInterval: any;
  public active: boolean;

  constructor(buildingService: BuildingService, resourceService: ResourceService) {
    this.buildingService = buildingService;
    this.resourceService = resourceService;
  }

  activate() {
    this.active = true;

    this.animateTo(100, this.cycleMs*0.001);
    this.currentInterval = setInterval(()=>{
      this.update();
    }, this.cycleMs);
  }

  clicked(val){
    val ? this.activate() : this.deactivate();
  }

  update() {
    

    

    this.animateTo(100, this.cycleMs*0.001);
    this.resourceService.addResource(this.template.effect.resource, this.template.effect.increment);
  
    
  }

  deactivate() {
    this.active = false;
    if(this.currentInterval){
      clearInterval(this.currentInterval);
    }
  }

  ngOnInit() {
  }

  ngAfterViewInit(){
    //this.animateTo(100, this.cycleMs*0.001);
  }
  
  animateTo(percent:number, time:number){
    console.log('animate to' ,time);
    let obj = document.getElementsByClassName('fake-progress')[0];
    console.log(obj);
    if(obj){
      obj.animate(
        [{
          transform: 'translateX(0)'
        }, {
          transform: 'translateX(100)'
        }],
        time);
      //let style = ('width '+time+'s linear');
      //obj.style.webkitTransition = style;
      //obj.style.width = percent+"%";
    }
  }



  

}
