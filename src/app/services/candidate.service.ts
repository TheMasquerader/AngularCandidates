import { Injectable } from '@angular/core';

import { Candidate } from '../data-models/candidate';
import { CANDIDATES } from '../mock-candidates';

@Injectable()
export class CandidateService {
    getData(): Promise<Candidate[]> {
        return Promise.resolve(CANDIDATES);
    }

    getCandidate(id: number): Promise<Candidate> {
        return this.getData().then(candidates => candidates.find(candidates => candidates.id === id));
    }

    getDataSlowly(): Promise<Candidate[]> {
        return new Promise(resolve => {
            // Simulate server latency with a 2 second delay.
            setTimeout(() => resolve(this.getData()), 2000);
        });
    }
}