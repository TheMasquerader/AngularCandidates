import { Component, Input } from '@angular/core';
import { Candidate } from './data-models/candidate';

@Component({
    selector: 'candidate-detail',
    template: `
    <div *ngIf="candidate">
      <h2>{{candidate.name}} details!</h2>
      <div><label>id: </label>{{candidate.id}}</div>
      <div>
        <label>name: </label>
      <input [(ngModel)]="candidate.name" placeholder="name">
      </div>
    </div>
    `
})

export class CandidateDetailComponent {
    @Input() candidate: Candidate;
}