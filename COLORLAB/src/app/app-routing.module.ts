import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
const routes: Routes = [
{path:'', component: HomePageComponent},

{path:'/about', component: AboutComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
