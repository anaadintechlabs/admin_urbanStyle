import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserDashboardComponent } from './user-dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
    { 
        path: '', 
        component: UserDashboardComponent 
    },
    {
        path: 'userprofile/:id',
        component: UserProfileComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule {}
