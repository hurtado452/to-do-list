import { Injectable } from '@angular/core';

import { List } from './list';
import { LISTS } from './mock-lists';

@Injectable() //adds metadata that angular may need to inject other dependancies into this service
export class ListService{
    getLists(): List[] {
        return LISTS;
    }
 
}