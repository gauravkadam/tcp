import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCatalogComponent } from './course-catalog.component';
import { Routes, RouterModule } from '@angular/router';
import { SideMenuModule } from 'src/app/components/side-menu/side-menu.module';


const routes: Routes = [
  { path: '', component: CourseCatalogComponent }
]


@NgModule({
  declarations: [CourseCatalogComponent],
  imports: [
    CommonModule,
    SideMenuModule,
    RouterModule.forChild(routes)
  ]
})
export class CourseCatalogModule { }
