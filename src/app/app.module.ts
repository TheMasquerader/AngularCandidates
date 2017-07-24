import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // For NgModel.
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CandidateDetailComponent } from './components/candidate-detail.component';
import { CandidatesComponent } from './components/candidates.component';
import { DashboardComponent } from './components/dashboard.component';
import { CandidateService } from './services/candidate.service';

@NgModule({
  declarations: [
    AppComponent,
    CandidateDetailComponent,
    CandidatesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,

    // Route definitions:
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'candidates',
        component: CandidatesComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        // Parameterized route. The `/detail/` part of the URL is constant.
        // The trailing numeric `id` changes from item to item.
        path: 'detail/:id',
        component: CandidateDetailComponent
      }
    ])
  ],
  providers: [CandidateService], // Basically turns it into a singleton.
  bootstrap: [AppComponent]
})

export class AppModule { }
