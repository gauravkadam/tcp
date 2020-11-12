import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForumComponent } from './forum.component';
import { Routes, RouterModule } from '@angular/router';
import { SideMenuModule } from 'src/app/components/side-menu/side-menu.module';


const routes: Routes = [
  { path: '', component: ForumComponent }
]


@NgModule({
  declarations: [ForumComponent],
  imports: [
    CommonModule,
    SideMenuModule,
    RouterModule.forChild(routes)
  ]
})
export class ForumModule { }
