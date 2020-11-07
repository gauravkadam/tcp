import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyStudentsComponent } from './my-students.component';
import { Routes, RouterModule } from '@angular/router';
import { SideMenuModule } from 'src/app/components/side-menu/side-menu.module';


const routes: Routes = [
  { path: '', component: MyStudentsComponent }
]


@NgModule({
  declarations: [MyStudentsComponent],
  imports: [
    CommonModule,
    SideMenuModule,
    RouterModule.forChild(routes)
  ]
})
export class MyStudentsModule { }
