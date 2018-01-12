import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShipComponent } from './ship/ship.component';


const routes: Routes = [
  { path: 'ships', component: ShipComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]  
})
export class AppRoutingModule { }
