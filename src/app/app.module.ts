import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap/alert';
import { AppComponent } from './app.component';
import { ResourcesComponent } from './resources/resources.component';
import { ResourceService } from './resources/resource.service';
import { ShipComponent } from './ship/ship.component';
import { JobService } from './services/job.service';
import { JobsComponent } from './jobs/jobs.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AppRoutingModule } from './/app-routing.module';
import { BuildingComponent } from './building/building.component';
import { BuildingService } from './building/building.service';
import { DestinationService } from './services/destination.service';
import { ShipService } from './services/ship.service';
import { NotificationService } from './services/notification.service';

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
    AppRoutingModule,
    AlertModule.forRoot()
  ],
  providers: [ResourceService, 
              JobService, 
              BuildingService, 
              DestinationService,
              ShipService,
              NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
