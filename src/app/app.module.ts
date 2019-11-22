import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpTestingComponent } from './http-testing/http-testing.component';
import { HttpClientModule } from '@angular/common/http';

import {DataFetchService} from "./data-fetch.service";

@NgModule({
  declarations: [
    AppComponent,
    HttpTestingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataFetchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
