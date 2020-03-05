import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AffiliateRoutingModule } from '../affiliate-routing';
import { AffiliateDashboardComponent } from './affiliate-dashboard.component';



@NgModule({
  declarations: [
    AffiliateDashboardComponent
  ],
  imports: [
    CommonModule,
    AffiliateRoutingModule
  ]
})
export class AffiliateDashboardModule { }
