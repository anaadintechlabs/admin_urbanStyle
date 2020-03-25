import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing';
import { UserDashboardComponent } from './user-dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';



@NgModule({
  declarations: [
    UserDashboardComponent,
    UserProfileComponent,

  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserDashboardModule { }
