import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AffiliateDashboardComponent } from './affiliate-dashboard/affiliate-dashboard.component';


const routes: Routes = [
    { 
        path: '', 
        component: AffiliateDashboardComponent 
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AffiliateRoutingModule {}
