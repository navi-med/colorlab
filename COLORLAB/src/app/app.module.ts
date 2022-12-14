import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutComponent } from './about/about.component';
import { AboutPageComponent } from './Components/about-page/about-page.component';
import { TestInstrComponent } from './test-instr/test-instr.component';
import { ContactoComponent } from './contacto/contacto.component';
import { TestFotoComponent } from './test-foto/test-foto.component';
import { RegistroComponent } from './registro/registro.component';
import { PerfilComponent } from './perfil/perfil.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component'





@NgModule({
  declarations: [
    AppComponent,

    FooterComponent,
    HeaderComponent,
    HomePageComponent,
    AboutComponent,
    AboutPageComponent,
    TestInstrComponent,
    ContactoComponent,
    TestFotoComponent,
    RegistroComponent,
    PerfilComponent,
    LoginComponent,
    SignupComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
