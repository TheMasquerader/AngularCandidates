import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { DashboardComponent } from "./components/dashboard.component";
import { CandidatesComponent } from "./components/candidates.component";
import { CandidateDetailComponent } from "./components/candidate-detail.component";

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'candidates', component: CandidatesComponent },
    { path: 'dashboard', component: DashboardComponent },
    // Parameterized route. The `/detail/` part of the URL is constant.
    // The trailing numeric `id` changes from item to item.
    { path: 'detail/:id', component: CandidateDetailComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}