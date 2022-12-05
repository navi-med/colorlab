import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './Components/about-page/about-page.component';
const routes: Routes = [
{path:'', component: HomePageComponent},

{path:'about', component: AboutComponent},
{path:'about-page', component: AboutPageComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
