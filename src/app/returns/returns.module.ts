import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReturnsDashboardComponent } from "./returns-dashboard/returns-dashboard.component";
import { ReturnsRoutingModule } from "./returns.routing";
import { ReturnssProfileComponent } from './returnss-profile/returnss-profile.component';

@NgModule({
    declarations: [
    ReturnsDashboardComponent,
    ReturnssProfileComponent,
        
    ],
    imports: [
      CommonModule,
      ReturnsRoutingModule
    ]
  })
  export class ReturnsModule { }
  