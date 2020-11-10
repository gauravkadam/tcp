import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  public activityData = {
    time: '4PM - 5PM',
    when: 'Today',
    class: 'FlexBox',
    course: 'WEB DEVELOPMENT FOR BEGINNERS',
    lesson: {
        lessonNo: 'Lesson 1',
        task: 'task 5',
        points: '30 Points',
    },
    timeLeftToBegin: '45 min'
};
  constructor(private sharedService: SharedService, private router: Router) { }

  public onCreateCourse(data){
    this.sharedService.setSideMenuCollapse(true);
    this.router.navigate(['/my-courses/duplicate-course'])
  }

}
