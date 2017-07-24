import { Component, OnInit } from '@angular/core';

import { Candidate } from './data-models/candidate';
import { CandidateService } from './services/candidate.service';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
    <h1>{{title}}</h1>
    <!--<my-candidates></my-candidates>-->
    <nav>
      <a routerLink="/dashboard">Dashboard</a>
      <a routerLink="/candidates">Candidates</a>
    </nav>
    <router-outlet></router-outlet>
  `
})

export class AppComponent {
  title = 'Oatmeal Candidates';
}
