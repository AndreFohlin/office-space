import { Component } from '@angular/core';
import { ResourceService } from './resource.service';
import { JobService } from './job.service';
import { Job } from './job';
import { Buildings } from './buildings/buildings'
import { request } from 'http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  ships:any[];
  private resources: ResourceService;
  private jobs: JobService;
  private buildings: any;
  private ownedBuildings:string[];

  constructor(resourceService:ResourceService, jobService: JobService){
    this.resources = resourceService;
    this.jobs = jobService;
    this.ships = [];
    this.buildings = Buildings;
    this.ownedBuildings = [];
  }

  ngOnInit(){

  }

  addGold(){
      this.resources.addGold(50);
  }

  buildShip(){
    if(this.resources.getGold() >= 50) {
      this.resources.addGold(-50);

      this.jobs.addJob('Building a ship...', 2, (job:Job)=>{
        this.ships.push({id:this.ships.length});
      });
    }
  }

  build(buildingType):any {
    let buildTemplate = Buildings[buildingType];
    if(buildTemplate){
      if(buildTemplate.requirements.gold){
        if(this.resources.hasGold(buildTemplate.requirements.gold)) {
          this.resources.addGold(-buildTemplate.requirements.gold);
    
          this.jobs.addJob('Building...', 2, (job:Job)=>{
            if( buildTemplate.effect.gold ) this.resources.goldPerSec += buildTemplate.effect.gold;
            if( buildTemplate.effect.grog ) this.resources.grogPerSec += buildTemplate.effect.grog;
            this.ownedBuildings.push(buildingType);
          });
        }
      }
    }else{
      console.log('no building type!');
    }
  }

  canBuild(buildingType:any){
    let requirementsMet = true;
    let building:any = Buildings[buildingType];
    if(building.requirements){
      if(building.requirements.gold){
        if(!this.resources.hasGold(building.requirements.gold)){
          requirementsMet = false;
        }
      }
      
      if(building.requirements.buildings){
        building.requirements.buildings.forEach((buildRequirement)=>{
          if(!this.ownedBuildings.includes(buildRequirement)){ requirementsMet = false; }
        });
      }
    }
    return requirementsMet;
  }

}
