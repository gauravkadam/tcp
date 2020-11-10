import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCoursesComponent } from './my-courses.component';
import { Routes, RouterModule } from '@angular/router';
import { SideMenuModule } from 'src/app/components/side-menu/side-menu.module';
import { ActivitiesModule } from 'src/app/components/activities/activities.module';
import { CourseCardModule } from 'src/app/components/course-card/course-card.module';
import { DuplicateCoursePanelComponent } from './duplicate-course-panel/duplicate-course-panel.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {
    path: '', component: MyCoursesComponent, children: [
      { path: 'duplicate-course', component: DuplicateCoursePanelComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
]
@NgModule({
  declarations: [MyCoursesComponent, DuplicateCoursePanelComponent, DashboardComponent],
  imports: [
    CommonModule,
    SideMenuModule,
    ActivitiesModule,
    CourseCardModule,
    RouterModule.forChild(routes),
  ]
})
export class MyCoursesModule { }
