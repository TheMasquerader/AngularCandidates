import { InMemoryDbService } from "angular-in-memory-web-api";

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const candidates = [
            { id:  0, name: 'Default'},
            { id: 11, name: 'Mr. Angus' },
            { id: 12, name: 'Sookie' },
            { id: 13, name: 'Rolland' },
            { id: 14, name: 'Jerry' },
            { id: 15, name: 'Morty' },
            { id: 16, name: 'RubberMan' },
            { id: 17, name: 'Dread Pirate Roberts' },
            { id: 18, name: 'Interceptor' },
            { id: 19, name: 'Moradin' },
            { id: 20, name: 'Mr. Sanderson' }
        ];
        return {candidates};
    }
}