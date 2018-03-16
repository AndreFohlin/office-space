import { Component, OnInit } from '@angular/core';
import { ShipService } from '../services/ship.service';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  private shipService: ShipService;

  constructor(shipService: ShipService) {
    this.shipService = shipService;
  }

  ngOnInit() {
  }

}
