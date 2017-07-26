import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from "@angular/common";

import 'rxjs/add/operator/switchMap';

import { Candidate } from '../data-models/candidate';
import { CandidateService } from '../services/candidate.service';

@Component({
    selector: 'candidate-detail',
    templateUrl: './candidate-detail.component.html',
    styleUrls: ['./candidate-detail.component.css']
})

export class CandidateDetailComponent implements OnInit {
    @Input() candidate: Candidate;

    constructor(
      private candidateService: CandidateService,
      private route: ActivatedRoute,
      private location: Location
    ) {}

    ngOnInit(): void {
      // The `switchMap` operator maps the `id` in the Observable route params to a new `Observable`, the result of the `CandidateService.getData()` method.
      // If a user re-navigates to this component while a `getData` request is still processing, `switchMap` cancels the old request, then calls `getData` again.

      // The candidate `id` is a number. Route params are always string -> the route parameter value is converted to a number with the JavaScript (+) operator.
      this.route.paramMap.switchMap((params: ParamMap) => this.candidateService.getCandidate(+params.get('id'))).subscribe(candidate => this.candidate = candidate);
    }

    save(): void {
      this.candidateService.update(this.candidate)
        .then(() => this.goBack())
    }

    goBack(): void {
      this.location.back();
    }
}