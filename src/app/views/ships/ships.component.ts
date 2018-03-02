import { Component, OnInit } from '@angular/core';
import { ShipService } from '../../ship.service';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.css']
})
export class ShipsComponent implements OnInit {
  
  private shipService: ShipService;
  constructor(shipService: ShipService) {
    this.shipService = shipService;
   }

  ngOnInit() {
  }

}
