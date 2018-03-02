import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BuildingsComponent } from './views/buildings/buildings.component';
import { ShipsComponent } from './views/ships/ships.component';


const routes: Routes = [
  { path: 'ships', component: ShipsComponent },
  { path: 'buildings', component: BuildingsComponent },
  { path: '', redirectTo: '/buildings', pathMatch: 'full'}
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]  
})
export class AppRoutingModule { }
