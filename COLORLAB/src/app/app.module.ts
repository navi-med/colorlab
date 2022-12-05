import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutComponent } from './about/about.component';
import { AboutPageComponent } from './Components/about-page/about-page.component';
import { TestInstrComponent } from './test-instr/test-instr.component'
@NgModule({
  declarations: [
    AppComponent,

    FooterComponent,
    HeaderComponent,
    HomePageComponent,
    AboutComponent,
    AboutPageComponent,
    TestInstrComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
