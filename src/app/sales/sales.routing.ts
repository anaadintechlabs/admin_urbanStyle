import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { SalesDashboardComponent } from "./sales-dashboard/sales-dashboard.component";
import { SalesProfileComponent } from "./sales-profile/sales-profile.component";


const routes: Routes = [
    {
        path: '', component: SalesDashboardComponent
    },
    {
        path: 'salesprofile/:id', component:SalesProfileComponent
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SalesRoutingModule {}