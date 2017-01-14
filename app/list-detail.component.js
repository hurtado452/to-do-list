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
var list_1 = require('./list');
var ListDetailComponent = (function () {
    function ListDetailComponent() {
    }
    ListDetailComponent.prototype.addItem = function (list, newItem) {
        if (newItem) {
            this.list = list;
            this.list.items.push(newItem);
        }
    };
    ListDetailComponent.prototype.deleteItem = function (list, item) {
        this.list = list;
        var index = this.list.items.indexOf(item);
        if (item) {
            this.list.items.splice(index, 1);
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', list_1.List)
    ], ListDetailComponent.prototype, "list", void 0);
    ListDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-list-detail',
            templateUrl: "list-detail.component.html",
            styleUrls: ['app.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], ListDetailComponent);
    return ListDetailComponent;
}());
exports.ListDetailComponent = ListDetailComponent;
//# sourceMappingURL=list-detail.component.js.map