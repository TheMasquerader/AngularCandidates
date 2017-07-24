import { Component, OnInit } from '@angular/core';

import { Candidate } from '../data-models/candidate';
import { CandidateService } from '../services/candidate.service';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html'
})

export class DashboardComponent implements OnInit {
    candidates: Candidate[] = [];

    // Inject the `CandidateService` in the constructor and hold it in a private `candidateService` field.
    constructor(private candidateService: CandidateService) {}

    // Call the service to get candidates inside the Angular `ngOnInit()` lifecycle hook.
    ngOnInit(): void {
        this.candidateService.getData().then(candidates => this.candidates = candidates.slice(1, 5));
    }

}