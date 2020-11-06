import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: 'my-courses',
    loadChildren: () => import('../app/modules/my-courses/my-courses.module').then(m => m.MyCoursesModule)
  },
  {
    path: 'forum',
    loadChildren: () => import('../app/modules/forum/forum.module').then(m => m.ForumModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
