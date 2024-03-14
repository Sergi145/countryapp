import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponentComponent} from "./shared/pages/home-component/home-component.component";
import {AboutPageComponentComponent} from "./shared/pages/about-page-component/about-page-component.component";

const routes:Routes= [
  {
    path: 'home',
    component: HomeComponentComponent
  },
  {
    path: 'about',
    component: AboutPageComponentComponent
  },
  {
    path: '**',
    redirectTo: 'home'
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
