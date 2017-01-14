"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var list_service_1 = require('./list.service');
var AppComponent = (function () {
    function AppComponent(listService) {
        this.listService = listService;
    }
    AppComponent.prototype.getLists = function () {
        this.lists = this.listService.getLists();
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getLists();
    };
    AppComponent.prototype.onSelectList = function (list) {
        this.selectedList = list;
    };
    AppComponent.prototype.createList = function (name) {
        /*   this.lists = this.listService.getLists();
           for (var i = 0; i < this.lists.length;i++){
               console.log(this.lists[i]);
           }
          */
    };
    AppComponent.prototype.deleteList = function (list) {
        this.lists = this.lists.filter(function (l) { return l !== list; });
        if (this.selectedList === list) {
            this.selectedList = null;
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: "app.component.html",
            styleUrls: ['app.component.css'],
            providers: [list_service_1.ListService]
        }), 
        __metadata('design:paramtypes', [list_service_1.ListService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map