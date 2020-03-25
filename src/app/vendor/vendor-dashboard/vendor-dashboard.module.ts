import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorRoutingModule } from '../vendor-routing';
import { VendorDashboardComponent } from './vendor-dashboard.component';
import { VendorProfileComponent } from './vendor-profile/vendor-profile.component';



@NgModule({
  declarations: [
    VendorDashboardComponent,
    VendorProfileComponent
  ],
  imports: [
    CommonModule,
    VendorRoutingModule
  ]
})
export class VendorDashboardModule { }
