import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.scss']
})
export class MyCoursesComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

}
