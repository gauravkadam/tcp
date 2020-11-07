import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCoursesComponent } from './my-courses.component';
import { Routes, RouterModule } from '@angular/router';
import { SideMenuModule } from 'src/app/components/side-menu/side-menu.module';


const routes: Routes = [
  { path: '', component: MyCoursesComponent }
]
@NgModule({
  declarations: [MyCoursesComponent],
  imports: [
    CommonModule,
    SideMenuModule,
    RouterModule.forChild(routes),
  ]
})
export class MyCoursesModule { }
