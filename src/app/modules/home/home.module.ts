import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { SideMenuModule } from 'src/app/components/side-menu/side-menu.module';


const routes: Routes = [
  { path: '', component: HomeComponent }
]


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SideMenuModule,
    RouterModule.forChild(routes),
  ]
})
export class HomeModule { }
