import {
  Component,
  ViewChild,
  Input,
  ElementRef
} from '@angular/core';
import {
  BuildingService
} from '../services/building.service';
import { ResourceService } from '../resources/resource.service';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.css'],
})
export class BuildingComponent {

  @ViewChild('progressbar', {read: ElementRef}) progressBar: ElementRef;
  @Input() template: any;
  @Input() disabled: boolean;

  private buildingService: BuildingService;
  private resourceService: ResourceService;
  private building: boolean;
  private built: boolean;
  private cycleMs: number = 2000;
  public active: boolean;

  private animCallback: Function;


  constructor(buildingService: BuildingService, resourceService: ResourceService) {
    this.buildingService = buildingService;
    this.resourceService = resourceService;
  }

  activate() {
    this.active = true;

    this.progressBar.nativeElement.style.animation = 'progress '+this.cycleMs*0.001+'s linear infinite';
    this.animCallback = () => this.update();
    this.progressBar.nativeElement.addEventListener("animationiteration", this.animCallback);    
  }

  update() {
    this.resourceService.addResource(this.template.effect.resource, this.template.effect.increment);
  }

  
  clicked(val){
    val ? this.activate() : this.deactivate();
  }

  deactivate() {
    this.active = false;
    this.progressBar.nativeElement.style.animationName = 'none';
    this.progressBar.nativeElement.removeEventListener("animationiteration", this.animCallback);
  }

}
