import { Component } from '@angular/core';
import { ResourceService } from './resource.service';
import { JobService } from './job.service';
import { Job } from './job';

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

  constructor(resourceService:ResourceService, jobService: JobService){
    this.resources = resourceService;
    this.jobs = jobService;
    this.ships = [];
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
        console.log('Job '+job.name+ ' is done!');
        this.ships.push({});
      });


    }
  }

}
