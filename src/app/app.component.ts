import {
  Component
} from '@angular/core';
import { JobService } from './job.service';
import { DestinationService } from './destination.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private jobService: JobService;
  private destinationService: DestinationService;

  constructor(jobService: JobService, destinationService: DestinationService) {
    console.log("app init");
    this.jobService = jobService;
    this.destinationService = destinationService
  }

}
