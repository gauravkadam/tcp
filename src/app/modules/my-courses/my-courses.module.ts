import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCoursesComponent } from './my-courses.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: MyCoursesComponent }
]
@NgModule({
  declarations: [MyCoursesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class MyCoursesModule { }
