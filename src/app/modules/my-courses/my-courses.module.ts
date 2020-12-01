import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCoursesComponent } from './my-courses.component';
import { Routes, RouterModule } from '@angular/router';
import { SideMenuModule } from 'src/app/components/side-menu/side-menu.module';
import { ActivitiesModule } from 'src/app/components/activities/activities.module';
import { CourseCardModule } from 'src/app/components/course-card/course-card.module';
import { DuplicateCoursePanelComponent } from './duplicate-course-panel/duplicate-course-panel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { AddLessonComponent } from './add-lesson/add-lesson.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { MyCourseListComponent } from './my-course-list/my-course-list.component';
import { HttpClientModule} from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



const routes: Routes = [
  {
    path: '', component: MyCoursesComponent, children: [
      { path: 'duplicate-course', component: DuplicateCoursePanelComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'add-course', component: AddCourseComponent },
      { path: 'add-lesson', component: AddLessonComponent },
      { path: 'add-task', component: AddTaskComponent },
      { path: 'mycourses-list', component: MyCourseListComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
]
@NgModule({
  declarations: [MyCoursesComponent, DuplicateCoursePanelComponent, DashboardComponent, AddCourseComponent, AddLessonComponent, AddTaskComponent, MyCourseListComponent],
  imports: [
    CommonModule,
    SideMenuModule,
    ActivitiesModule,
    CourseCardModule,
    HttpClientModule,
    AngularEditorModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class MyCoursesModule { }
