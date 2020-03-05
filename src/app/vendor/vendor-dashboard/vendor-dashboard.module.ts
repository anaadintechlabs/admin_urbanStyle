import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorRoutingModule } from '../vendor-routing';
import { VendorDashboardComponent } from './vendor-dashboard.component';



@NgModule({
  declarations: [
    VendorDashboardComponent
  ],
  imports: [
    CommonModule,
    VendorRoutingModule
  ]
})
export class VendorDashboardModule { }
