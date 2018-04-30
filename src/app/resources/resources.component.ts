import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../resources/resource.service';
import { BuildingService } from '../services/building.service';


@Component({
  selector: 'resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit { 
  private resources: ResourceService;
  private buildingService: BuildingService;

  constructor(resourceService:ResourceService, buildingService: BuildingService) { 
    this.resources = resourceService;
    this.buildingService = buildingService;
  }

  ngOnInit() {
    
    
  }

  addGold() {
    this.resources.addGold(50);
  }

}
