import {
  Component
} from '@angular/core';
import { JobService } from './services/job.service';
import { DestinationService } from './services/destination.service';
import { BuildingService } from './services/building.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private jobService: JobService;
  private destinationService: DestinationService;
  private buildingService: BuildingService;

  constructor(jobService: JobService, destinationService: DestinationService, buildingService: BuildingService) {
    console.log("app init");
    this.jobService = jobService;
    this.destinationService = destinationService;
    this.buildingService = buildingService;
  }

}
