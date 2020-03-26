import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing';
import { UserDashboardComponent } from './user-dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import {NgxPaginationModule} from 'ngx-pagination'; 


@NgModule({
  declarations: [
    UserDashboardComponent,
    UserProfileComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    NgxPaginationModule

  ]
})
export class UserDashboardModule { }
