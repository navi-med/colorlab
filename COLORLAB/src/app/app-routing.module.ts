import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './Components/about-page/about-page.component';
import {TestInstrComponent} from './test-instr/test-instr.component';
import { ContactoComponent } from './contacto/contacto.component';
import { TestFotoComponent } from './test-foto/test-foto.component';

const routes: Routes = [
{path:'', component: HomePageComponent},

{path:'about', component: AboutComponent},
{path:'about-page', component: AboutPageComponent},
{path: 'test-instr', component: TestInstrComponent},
{path: 'contacto', component: ContactoComponent},
{path: 'test-foto', component: TestFotoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
