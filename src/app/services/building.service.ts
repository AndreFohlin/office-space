import { Injectable } from '@angular/core';

import { ResourceService } from '../resources/resource.service';

import { Buildings } from '../building/buildings/building-templates';
import { JobService } from '../services/job.service';
import { Job } from '../job';
import { NotificationService } from '../services/notification.service';

@Injectable()
export class BuildingService {

  private resourceService: ResourceService;
  private jobService: JobService;
  private ownedBuildings: number[];
  private unlockedFeatures: any[];
  private buildingTime: number = 0.5;
  
  private notificationService: NotificationService;

  constructor(resourceService: ResourceService, jobService: JobService, notificationService: NotificationService) { 
    this.resourceService = resourceService;
    this.jobService = jobService;
    this.notificationService = notificationService;
    this.ownedBuildings = [];
    this.unlockedFeatures = [];
  }

  build(buildTemplate): any {
    if (buildTemplate) {
      if (buildTemplate.requirements.gold) {
        if (this.resourceService.hasGold(buildTemplate.requirements.gold)) {
          this.resourceService.removeGold(buildTemplate.requirements.gold);

          this.jobService.addJob('Building ' + buildTemplate.name + '...', this.buildingTime, (job: Job) => {

            if (buildTemplate.effect) {
              if (buildTemplate.effect.gold) this.resourceService.goldPerSec += buildTemplate.effect.gold;
              //if (buildTemplate.effect.grog) this.resourceService.grogPerSec += buildTemplate.effect.grog;
              //if (buildTemplate.effect.goldLimit) this.resourceService.goldLimit += buildTemplate.effect.goldLimit;
              //if (buildTemplate.effect.grogLimit) this.resourceService.grogLimit += buildTemplate.effect.grogLimit;
            }

            if(buildTemplate.unlocks) {
              buildTemplate.unlocks.forEach( feature => {
                this.unlockedFeatures.push(feature.name);

                this.notificationService.addNotification({
                  type: 'info',
                  heading: feature.name+' unlocked!',
                  msg: feature.description,
                  dismissable: true,
                  timeout: 5000
                });
              });
            }
            this.ownedBuildings.push(buildTemplate);
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

  getAllOwnedBuildings() {
    return this.ownedBuildings;
  }

  hasFeature(feature): boolean {
    return this.unlockedFeatures.includes(feature);
  }
}
