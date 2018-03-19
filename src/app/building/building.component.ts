import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  Buildings
} from './buildings/building-templates';
import {
  BuildingService
} from '../services/building.service';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.css'],
})
export class BuildingComponent implements OnInit {

  @Input() template: any;
  @Input() disabled: boolean;

  private buildingService: BuildingService;
  private building: boolean;
  private built: boolean;


  constructor(buildingService: BuildingService) {
    this.buildingService = buildingService;
  }

  ngOnInit() {}

  onBuild() {
    this.buildingService.build(this.template);
    this.built = true;
  }

  requirementsMet() {
    return this.buildingService.canBuild(this.template);
  }

  getRequirementText() {
    let buildingNames = [];
    if (this.template.requirements.buildings) {

      this.template.requirements.buildings.forEach(element => {
        let building = Buildings.find((b => element === b.id));
        if (!this.buildingService.hasBuilding(building.id)) {
          buildingNames.push(' '+ building.name);
        }
      });
    }
    return buildingNames.length ? 'Requires ' + buildingNames : '';
  }

}
