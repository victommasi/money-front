import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';
import {SlideMenu, SlideMenuModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    SlideMenuModule
  ],
  declarations: [
    NavbarComponent
  ],
  exports : [
    NavbarComponent
  ]
})
export class CoreModule { }
