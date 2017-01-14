import { Component, Input } from '@angular/core';
import { List } from './list';

@Component({
    moduleId: module.id,
    selector: 'my-list-detail',
    templateUrl: "list-detail.component.html",
    styleUrls: ['app.component.css']
})

export class ListDetailComponent{
    @Input()
    list: List;

    addItem(list: List, newItem: string) {
        if (newItem) {
            this.list = list;
            this.list.items.push(newItem);
        }

    }
    deleteItem(list: List, item: string) {
        this.list = list;
        var index = this.list.items.indexOf(item);
        if (item) {
            this.list.items.splice(index, 1);
        }
    }
   
}