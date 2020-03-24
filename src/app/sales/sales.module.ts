import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SalesRoutingModule } from './sales.routing';
import { SalesDashboardComponent } from "./sales-dashboard/sales-dashboard.component";
import { SalesProfileComponent } from './sales-profile/sales-profile.component';

@NgModule({
    declarations: [
        SalesDashboardComponent,
        SalesProfileComponent,
     
    ],
    imports: [
      CommonModule,
      SalesRoutingModule
      
    ]
  })
  export class SalesModule { }
  