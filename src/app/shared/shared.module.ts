import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponentComponent } from './pages/home-component/home-component.component';
import { AboutPageComponentComponent } from './pages/about-page-component/about-page-component.component';



@NgModule({
  declarations: [
    HomeComponentComponent,
    AboutPageComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponentComponent,
    AboutPageComponentComponent
  ]
})
export class SharedModule { }
