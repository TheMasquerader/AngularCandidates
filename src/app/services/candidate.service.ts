import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Candidate } from '../data-models/candidate';

@Injectable()
export class CandidateService {

    private candidatesUrl = 'api/candidates'; // URL to web api
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }

    getData(): Promise<Candidate[]> {
        // The Angular `http.get` returns an RxJS `Observable` (observables -> powerful way to manage async data flows.
        return this.http.get(this.candidatesUrl)
            // Convert the `Observable` to a `Promise`.
            .toPromise()
            // Extract the data in the `then` callback.
            .then(response => response.json().data as Candidate[]).catch(this.handleError);
    }

    getCandidate(id: number): Promise<Candidate> {
        const url = `${this.candidatesUrl}/${id}`;

        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Candidate)
            .catch(this.handleError);
        //return this.getData().then(candidates => candidates.find(candidates => candidates.id === id));
    }

    update(candidate: Candidate): Promise<Candidate> {
        const url = `${this.candidatesUrl}/${candidate.id}`;
        return this.http
            .put(url, JSON.stringify(candidate), {headers: this.headers})
            .toPromise()
            .then(() => candidate)
            .catch(this.handleError);
    }

    create(name: string): Promise<Candidate> {
        return this.http
        .post(this.candidatesUrl, JSON.stringify({name: name}), {headers: this.headers})
        .toPromise()
        .then(res => res.json().data as Candidate)
        .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.candidatesUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    getDataSlowly(): Promise<Candidate[]> {
        return new Promise(resolve => {
            // Simulate server latency with a 2 second delay.
            setTimeout(() => resolve(this.getData()), 2000);
        });
    }

    private handleError(error: any): Promise<any> {
        console.error('Something went wrong.', error); // for demo purposes only
        return Promise.reject(error.message | error);
    }
}