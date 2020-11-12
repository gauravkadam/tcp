import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './side-menu.component';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '../header/header.module';



@NgModule({
  declarations: [SideMenuComponent],
  imports: [
    CommonModule,
    RouterModule,
    HeaderModule,
  ],
  exports: [SideMenuComponent]
})
export class SideMenuModule { }
