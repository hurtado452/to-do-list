import { Component, OnInit } from '@angular/core';

import { List } from './list';
import { ListService } from './list.service';


@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl:"app.component.html",
    styleUrls: ['app.component.css'],
    providers: [ListService]
})

export class AppComponent implements OnInit{
    lists: List[];
    selectedList: List;
    constructor(private listService: ListService){

    }

    getLists(): void{
        this.lists = this.listService.getLists();
    }

    ngOnInit(): void{
        this.getLists();
    }
    onSelectList(list: List): void{
        this.selectedList = list;
    }

    createList(name: string){
       

     /*   this.lists = this.listService.getLists();
        for (var i = 0; i < this.lists.length;i++){
            console.log(this.lists[i]);
        }
       */ 
    }

    deleteList(list: List): void{
     
        this.lists = this.lists.filter(l => l !== list);
        if (this.selectedList === list) {
            this.selectedList = null;
        }
    }
}