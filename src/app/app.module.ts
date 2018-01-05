import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ResourcesComponent } from './resources/resources.component';
import { ResourceService } from './resource.service';
import { ShipComponent } from './ship/ship.component';
import { JobService } from './job.service';
import { JobsComponent } from './jobs/jobs.component';


@NgModule({
  declarations: [
    AppComponent,
    ResourcesComponent,
    ShipComponent,
    JobsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ResourceService, JobService],
  bootstrap: [AppComponent]
})
export class AppModule { }
