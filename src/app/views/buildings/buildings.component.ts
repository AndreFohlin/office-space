import {
  Component
} from '@angular/core';
import {
  ResourceService
} from '../../resource.service';
import {
  JobService
} from '../../job.service';
import {
  Job
} from '../../job';
import {
  BuildingService
} from '../../building/building.service';
import {
  DestinationService
} from '../../destination.service';
import {
  OnInit
} from '@angular/core/src/metadata/lifecycle_hooks';
import { ShipService } from '../../ship.service';


@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.css']
})
export class BuildingsComponent implements OnInit {
  title = 'app';
  private resources: ResourceService;
  private jobs: JobService;
  private buildings: any;
  private buildingService: BuildingService;
  private shipService: ShipService;
  private destinationService: DestinationService;

  constructor(resourceService: ResourceService, jobService: JobService, buildingService: BuildingService, shipService: ShipService, destinationService: DestinationService) {
    this.resources = resourceService;
    this.jobs = jobService;
    this.buildingService = buildingService;
    this.shipService = shipService;
    this.destinationService = destinationService;
  }

  ngOnInit() {
    this.buildings = this.buildingService.getAllBuildings();

    this.resources.goldObservable.subscribe(this.onGoldUpdated.bind(this) );
  }

  onGoldUpdated(gold: number) {
    // Discover new trading destinations
    this.destinationService.gotNewDestination(gold);
    
  }

  addGold() {
    this.resources.addGold(50);
  }

  buildShip() {
    if (this.resources.getGold() >= 50) {
      this.resources.addGold(-50);

      this.jobs.addJob('Building a ship...', 2, (job: Job) => {
        this.shipService.createShip();
      });
    }
  }
}