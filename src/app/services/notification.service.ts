import { Injectable } from '@angular/core';

@Injectable()
export class NotificationService {
  private alerts: any[];

  constructor() { 
    this.alerts = [];
  }

  addNotification(notification){
    this.alerts.push(notification);
  }

  removeNotification(dismissedAlert: any) {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }
}
