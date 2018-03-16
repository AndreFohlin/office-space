import {
  Injectable
} from '@angular/core';
import {
  Destinations
} from '../destinations/destinations';
import { ResourceService } from '../resources/resource.service';
import { NotificationService } from './notification.service';

class Destination {
  public id: number;
  public name: string;
  public distance: number;
  public wealthTarget: number;
  public inDemand: any[];
  public provides: any[];

  constructor(data: any) {
    this.id = data.id;
    this.name = data.name;
    this.distance = data.distance;
    this.wealthTarget = data.wealthTarget;
    this.inDemand = [];
    this.provides = [];
  }

}

@Injectable()
export class DestinationService {

  private resourceService: ResourceService;
  private notificationService: NotificationService;
  public discoveredDestinations: Array < Destination > ;

  constructor(resourceService: ResourceService, notificationService: NotificationService) {
    this.resourceService = resourceService;
    this.notificationService = notificationService;
    this.discoveredDestinations = new Array < Destination > ();
  }

  private discoverDestination(): void {
    if (this.discoveredDestinations.length < Destinations.length) {
      let destination = new Destination(Destinations[this.discoveredDestinations.length]);
      destination.provides.push(this.resourceService.getRandomTradingResource());
      do {
        destination.inDemand = [];
        destination.inDemand.push(this.resourceService.getRandomTradingResource());
      }while(destination.inDemand[0].name == destination.provides[0].name)
      
      this.notificationService.addNotification({
        type: 'success',
        heading: 'Location discovered: '+ destination.name,
        msg: 'Send ships to locations to earn more 🌟 gold',
        dismissable: true,
        timeout: 5000
      });

      this.discoveredDestinations.push(
        destination
      );
    }
  }

  gotNewDestination(wealth: number): boolean {
    if (Destinations[this.discoveredDestinations.length]) {
      let nextDestinationWealthTarget = Destinations[this.discoveredDestinations.length].wealthTarget;
      if (wealth >= nextDestinationWealthTarget) {
        this.discoverDestination();
        return true;
      }
    }
    return false;
  }
}
