import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { VendorDashboardComponent } from './vendor-dashboard/vendor-dashboard.component';
import { VendorProfileComponent } from './vendor-dashboard/vendor-profile/vendor-profile.component';

const routes: Routes = [
    { 
        path: '', 
        component: VendorDashboardComponent 
    },
    {
        path: 'vendorprofile/:id',
        component: VendorProfileComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VendorRoutingModule {}