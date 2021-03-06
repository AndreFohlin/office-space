import { Component, OnInit, Input } from '@angular/core';
import { JobService } from '../services/job.service';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';


@Component({
  selector: 'jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements AfterViewInit {
  
  jobs:JobService;

  @Input()
  data: any;

  constructor(private jobService: JobService) {
    this.jobs = jobService;
  }

  ngAfterViewInit(){
    setTimeout(()=>{
      this.animateTo(100, this.data.timeLeft);
    });
  }
  
  animateTo(percent:number, time:number){
    let obj = document.getElementById(this.data.id);
    if(obj){
      let style = ('width '+time+'s linear');
      obj.style.webkitTransition = style;
      obj.style.width = percent+"%";
    }
  }

}
