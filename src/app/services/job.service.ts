import { Injectable } from '@angular/core';
import { Job } from '../job';
import { animate } from '@angular/animations';

@Injectable()
export class JobService {
  private jobs:Job[];
  private nextId:number = 0;

  constructor() {
    this.jobs = [];
   }

  addJob(name:string, time:number, cb:(Job) => void): Job{
    let job: Job = new Job(this.nextId++, name, time, cb);
    this.jobs.push(job);

    let ref = this;
    setTimeout(()=>{
        ref.removeJob(job);
        job.callback(job);
    }, time*1000);

    return job;
  }

  removeJob(job:Job) {
    let index = this.jobs.indexOf(job);
    this.jobs.splice(index, 1);
  }

  getJobs():Job[]{
    return this.jobs;
  }

}
