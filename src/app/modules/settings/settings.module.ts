import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { Routes, RouterModule } from '@angular/router';
import { SideMenuModule } from 'src/app/components/side-menu/side-menu.module';


const routes: Routes = [
  { path: '', component: SettingsComponent }
]



@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    SideMenuModule,
    RouterModule.forChild(routes),
  ],
  exports: []
})
export class SettingsModule { }
