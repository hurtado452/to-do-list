import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    
    createDb(){
        let lists = [
            { id: 1, title: 'Grocery List' },
            { id: 2, title: 'Chore List' }

        ];
        return { lists };
    }
}