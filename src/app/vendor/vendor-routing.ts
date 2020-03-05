import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { VendorDashboardComponent } from './vendor-dashboard/vendor-dashboard.component';

const routes: Routes = [
    { 
        path: '', 
        component: VendorDashboardComponent 
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VendorRoutingModule {}