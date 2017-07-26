import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { CandidateSearchService } from '../services/candidate-search.service';
import { Candidate } from '../data-models/candidate';

@Component({
    selector: 'candidate-search',
    templateUrl: './candidate-search.component.html',
    styleUrls: ['./candidate-search.component.css'],
    providers: [CandidateSearchService]
})
export class CandidateSearchComponent implements OnInit {
    candidates: Observable<Candidate[]>;
    private searchTerms = new Subject<string>();

    constructor(
        private candidateSearchService: CandidateSearchService,
        private router: Router) {}

    // Push a search term into the observable stream.
    search(term: string): void {
        this.searchTerms.next(term);
    }

    ngOnInit(): void {
        this.candidates = this.searchTerms
        .debounceTime(300) // wait 300ms after each keystroke before considering the term
        .distinctUntilChanged() // ignore if the next search term is the same as previously
        .switchMap( // switch to a new observable each time the term changes
            // return the http search observable...
            term => term ? this.candidateSearchService.search(term)
            // ... or the observable of empty candidates if there was no search term.
                : Observable.of<Candidate[]>([]))
                .catch(error => {
                    console.log(error);
                    return Observable.of<Candidate[]>([]);
                });
    }

    gotoDetail(candidate: Candidate): void {
        let link = ['/detail', candidate.id];
        this.router.navigate(link);
    }
}