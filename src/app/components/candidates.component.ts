import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Candidate } from '../data-models/candidate';
import { CandidateService } from '../services/candidate.service';

@Component({
  selector: 'my-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css'],
  //providers: [CandidateService] // Tells Angular to create a fresh instance of the `CandidateService` when it creates an `AppComponent`.
})

export class CandidatesComponent implements OnInit {
  candidates: Candidate[];
  selectedCandidate: Candidate;

  constructor(private candidateService: CandidateService, private router: Router) {}
  // The constructor itself does nothing. The parameter simultaneously defines a private `candidateService` property and identifies it as a `CandidateService` injection site.
  // Now Angular knows to supply an instance of the `CandidateService` when it creates an `AppComponent`.

  ngOnInit(): void {
    this.getCandidates();
  }

  onSelect(candidate: Candidate): void {
    this.selectedCandidate = candidate;
  }

  getCandidates(): void {
    this.candidateService.getData().then(candidates => this.candidates = candidates);
  }

  gotoDetail(): void {
    // Two-element link parameters array - a path and the route parameter.
    this.router.navigate(['detail', this.selectedCandidate.id]);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.candidateService.create(name)
      .then(candidate => {
          this.candidates.push(candidate);
          this.selectedCandidate = null;
      });
  }

  delete(candidate: Candidate): void {
    this.candidateService
      .delete(candidate.id)
      .then(() => {
        this.candidates = this.candidates.filter(x => x !== candidate);
        if (this.selectedCandidate === candidate) { this.selectedCandidate = null; }
      })
  }
}
