import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyStudentsComponent } from './my-students.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: MyStudentsComponent }
]


@NgModule({
  declarations: [MyStudentsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MyStudentsModule { }
