import { Component, OnInit } from '@angular/core';

import { Candidate } from './data-models/candidate';
import { CandidateService } from './services/candidate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CandidateService] // Tells Angular to create a fresh instance of the `CandidateService` when it creates an `AppComponent`.
})

export class AppComponent implements OnInit {
  title = 'Oatmeal Candidates';

  candidates: Candidate[];
  selectedCandidate: Candidate;

  constructor(private candidateService: CandidateService) {}
  // The constructor itself does nothing. The parameter simultaneously defines a private `candidateService` property and identifies it as a `CandidateService` injection site.
  // Now Angular knows to supply an instance of the `CandidateService` when it creates an `AppComponent`.

  ngOnInit(): void {
    this.getCandidates();
  }

  onSelect(candidate: Candidate): void {
    this.selectedCandidate = candidate;
  }

  getCandidates(): void {
    this.candidates = this.candidateService.getData();
  }
}
