
import { FeatureComponent } from './components/app.feature.component';
import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { CommonModule } from '@angular/common';

const routes:Routes =[
  {path:'', component:FeatureComponent}
];

@NgModule({
  // register the route table as a child routing
  // when the current FeatureModule is loaded
  imports:[RouterModule.forChild(routes), CommonModule],
  declarations:[FeatureComponent]
})
export class FeatureModule {}
