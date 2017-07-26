import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // For NgModel.
import { RouterModule } from '@angular/router';
import { HttpModule } from "@angular/http";

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api.
// This example simulates communication with the remote server by adding the InMemoryWebApiModule to the `imports` module, effectively replacing the `Http` client's XHR backend service with an in-memory alternative.
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from "./services/in-memory-data.service";

import { AppComponent } from './app.component';

import { CandidateDetailComponent } from './components/candidate-detail.component';
import { CandidatesComponent } from './components/candidates.component';
import { DashboardComponent } from './components/dashboard.component';
import { CandidateSearchComponent } from './components/candidate-search.component';
import { CandidateService } from './services/candidate.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [
    AppComponent,
    CandidateDetailComponent,
    CandidatesComponent,
    DashboardComponent,
    CandidateSearchComponent
  ],
  providers: [CandidateService], // Basically turns it into a singleton.
  bootstrap: [AppComponent]
})

export class AppModule { }
