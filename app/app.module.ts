import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListDetailComponent } from './list-detail.component';

@NgModule({
    imports: [BrowserModule, 
              FormsModule,
              ],
    declarations: [AppComponent, ListDetailComponent],
    bootstrap: [AppComponent]

})

export class AppModule{
    
}