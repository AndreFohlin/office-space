import {
  Component
} from '@angular/core';
import {
  ResourceService
} from '../../resources/resource.service';
import {
  JobService
} from '../../services/job.service';
import {
  Job
} from '../../job';
import {
  BuildingService
} from '../../services/building.service';
import {
  DestinationService
} from '../../services/destination.service';
import {
  OnInit
} from '@angular/core/src/metadata/lifecycle_hooks';
import { ShipService } from '../../services/ship.service';
import { NotificationService } from '../../services/notification.service';
import { Buildings } from '../../building/buildings/building-templates';


@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.css']
})
export class BuildingsComponent implements OnInit {
  private resources: ResourceService;
  private jobs: JobService;
  private buildings: any;
  private ownedBuildings: any;
  private buildingService: BuildingService;
  private shipService: ShipService;
  private destinationService: DestinationService;
  private notificationService: NotificationService;


  constructor(resourceService: ResourceService, jobService: JobService, buildingService: BuildingService, shipService: ShipService, destinationService: DestinationService, notificationService: NotificationService) {
    this.resources = resourceService;
    this.jobs = jobService;
    this.buildingService = buildingService;
    this.shipService = shipService;
    this.destinationService = destinationService;
    this.notificationService = notificationService;
  }

  ngOnInit() {
    this.buildings = this.buildingService.getAllBuildings();
    this.ownedBuildings = this.buildingService.getAllOwnedBuildings();

    this.resources.goldObservable.subscribe(this.onGoldUpdated.bind(this) );
  }

  onGoldUpdated(gold: number) {
    // Discover new trading destinations
    this.destinationService.gotNewDestination(gold);
    
  }

  buildShip() {
    if (this.resources.getGold() >= 50) {
      this.resources.addGold(-50);

      this.jobs.addJob('Building a ship...', 2, (job: Job) => {
        this.shipService.createShip();
      });
    }
  }

  getRequirementText(template: any) {
    let buildingNames = [];
    if (template.requirements.buildings) {

      template.requirements.buildings.forEach(element => {
        let building = Buildings.find((b => element === b.id));
        if (!this.buildingService.hasBuilding(building.id)) {
          buildingNames.push(' '+ building.name);
        }
      });
    }
    return buildingNames.length ? 'Requires ' + buildingNames : '';
  }

  onBuild(template: any) {
    this.buildingService.build(template);
  }

  requirementsMet(template: any) {
    return this.buildingService.canBuild(template);
  }

}
