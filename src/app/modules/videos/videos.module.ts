import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideosComponent } from './videos.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: VideosComponent }
]


@NgModule({
  declarations: [VideosComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class VideosModule { }
