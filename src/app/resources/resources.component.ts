import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../resources/resource.service';


@Component({
  selector: 'resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit { 
  private resources:ResourceService;
  constructor(resourceService:ResourceService) { 
    this.resources = resourceService;
  }

  ngOnInit() {

    
  }

}
