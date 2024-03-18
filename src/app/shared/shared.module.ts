import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponentComponent } from './pages/home-component/home-component.component';
import { AboutPageComponentComponent } from './pages/about-page-component/about-page-component.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {RouterModule} from "@angular/router";
import { ContactPageComponentComponent } from './pages/contact-page-component/contact-page-component.component';
import { InputSearchComponent } from './components/input-search/input-search.component';





@NgModule({
  declarations: [
    HomeComponentComponent,
    AboutPageComponentComponent,
    SidebarComponent,
    ContactPageComponentComponent,
    InputSearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HomeComponentComponent,
    AboutPageComponentComponent,
    SidebarComponent,
    InputSearchComponent

  ]
})
export class SharedModule { }
