import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ReturnsDashboardComponent } from "./returns-dashboard/returns-dashboard.component";
import { ReturnssProfileComponent } from "./returnss-profile/returnss-profile.component";


const routes: Routes = [
    {
        path: '', component: ReturnsDashboardComponent
    },
    {
        path: 'returnprofile/:id', component: ReturnssProfileComponent
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReturnsRoutingModule {}