import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ResourcesComponent } from './resources/resources.component';
import { ResourceService } from './resource.service';
import { ShipComponent } from './ship/ship.component';
import { JobService } from './job.service';
import { JobsComponent } from './jobs/jobs.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AppRoutingModule } from './/app-routing.module';
import { BuildingComponent } from './building/building.component';
import { BuildingService } from './building/building.service';
import { DestinationService } from './destination.service';
import { ShipService } from './ship.service';

import { ShipsComponent } from './views/ships/ships.component';
import { BuildingsComponent } from './views/buildings/buildings.component';


@NgModule({
  declarations: [
    AppComponent,
    ResourcesComponent,
    ShipComponent,
    JobsComponent,
    NavigationComponent,
    BuildingComponent,
    ShipsComponent,
    BuildingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ResourceService, 
              JobService, 
              BuildingService, 
              DestinationService,
              ShipService],
  bootstrap: [AppComponent]
})
export class AppModule { }
