import { Injectable } from '@angular/core';
import { ResourceService } from '../resource.service';
import { Buildings } from './buildings/buildings';
import { JobService } from '../job.service';
import { Job } from '../job';

@Injectable()
export class BuildingService {

  private resourceService: ResourceService;
  private jobService: JobService;
  

  private ownedBuildings: number[];

  constructor(resourceService: ResourceService, jobService: JobService) { 
    this.resourceService = resourceService;
    this.jobService = jobService;
    this.ownedBuildings = [];
  }

  build(buildTemplate): any {
    if (buildTemplate) {
      if (buildTemplate.requirements.gold) {
        if (this.resourceService.hasGold(buildTemplate.requirements.gold)) {
          this.resourceService.removeGold(buildTemplate.requirements.gold);

          this.jobService.addJob('Building ' + buildTemplate.name + '...', 2, (job: Job) => {

            if (buildTemplate.effect) {
              if (buildTemplate.effect.gold) this.resourceService.goldPerSec += buildTemplate.effect.gold;
              if (buildTemplate.effect.grog) this.resourceService.grogPerSec += buildTemplate.effect.grog;
              if (buildTemplate.effect.goldLimit) this.resourceService.goldLimit += buildTemplate.effect.goldLimit;
              if (buildTemplate.effect.grogLimit) this.resourceService.grogLimit += buildTemplate.effect.grogLimit;
            }

            this.ownedBuildings.push(buildTemplate.id);
            
            if (buildTemplate.restricted) {

            }
          });
        }
      }
    } else {
      console.log('no building type!');
    }
  }

  canBuild(buildingType: any) {
    let requirementsMet = true;
    let building: any = buildingType;
    if (building.requirements) {
      if (building.requirements.gold) {
        if (!this.resourceService.hasGold(building.requirements.gold)) {
          requirementsMet = false;
        }
      }

      if (building.requirements.buildings) {
        building.requirements.buildings.forEach((buildRequirement) => {
          if (!this.ownedBuildings.includes(buildRequirement)) {
            requirementsMet = false;
          }
        });
      }

      if (building.requirements.restricted && this.hasBuilding(building.id)) {
        requirementsMet = false;
      }
    }

    
    return requirementsMet;
  }

  hasBuilding(buildingId: number): boolean {
    return this.ownedBuildings.includes(buildingId);
  }

  getAllBuildings(){
    return Buildings;
  }
}
