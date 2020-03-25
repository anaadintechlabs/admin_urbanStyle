import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AffiliateRoutingModule } from '../affiliate-routing';
import { AffiliateDashboardComponent } from './affiliate-dashboard.component';
import {NgxPaginationModule} from 'ngx-pagination'; 


@NgModule({
  declarations: [
    AffiliateDashboardComponent
  ],
  imports: [
    CommonModule,
    AffiliateRoutingModule,
    NgxPaginationModule
  ]
})
export class AffiliateDashboardModule { }
