import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, RequestOptions } from '@angular/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { Service } from './service/service'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpModule, 
    BrowserModule,
    AppRoutingModule,
    FormsModule // can use ngModel in HTML
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
