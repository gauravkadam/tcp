import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: 'course-catalog',
    loadChildren: () => import('../app/modules/course-catalog/course-catalog.module').then(m => m.CourseCatalogModule)
  },
  {
    path: 'my-courses',
    loadChildren: () => import('./modules/my-courses/my-courses.module').then(m => m.MyCoursesModule)
  },
  {
    path: 'forum',
    loadChildren: () => import('../app/modules/forum/forum.module').then(m => m.ForumModule)
  },
  {
    path: 'my-students',
    loadChildren: () => import('../app/modules/my-students/my-students.module').then(m => m.MyStudentsModule)
  },
  {
    path: 'videos',
    loadChildren: () => import('../app/modules/videos/videos.module').then(m => m.VideosModule)
  },
  {
    path: 'login',
    loadChildren: () => import('../app/components/login/login.module').then(m => m.LoginModule)
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
