import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponentComponent} from "./shared/pages/home-component/home-component.component";
import {AboutPageComponentComponent} from "./shared/pages/about-page-component/about-page-component.component";
import {ContactPageComponentComponent} from "./shared/pages/contact-page-component/contact-page-component.component";
import {CountryPageComponent} from "./countries/pages/country-page/country-page.component";

const routes:Routes= [
  {
    path: 'about',
    component: AboutPageComponentComponent
  },
  {
    path: 'contact',
    component: ContactPageComponentComponent
  },
  {
    path: 'countries',
    loadChildren: ()=> import('./countries/countries.module').then(m => m.CountriesModule)
  },
  {
    path: '**',
    redirectTo: 'countries'
  }

];


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ], exports: [
    RouterModule
  ]

})
export class AppRoutingModule { }
