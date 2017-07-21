import { Injectable } from '@angular/core';

import { Candidate } from '../data-models/candidate';
import { CANDIDATES } from '../mock-candidates';

@Injectable()
export class CandidateService {
    getData():Candidate[] {
        return CANDIDATES;
    }
}