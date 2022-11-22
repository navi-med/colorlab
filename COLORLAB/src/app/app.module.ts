import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {prueba} from './prueba/prueba.component';
import { HelloWorldComponent } from './hello-world/hello-world.component'
@NgModule({
  declarations: [
    AppComponent,
    prueba,
    HelloWorldComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
