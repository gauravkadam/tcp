import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent {

  @Input() createCourse: boolean;
  @Output() onCreateCourse = new EventEmitter<boolean>();

  public onCreate(){
    this.onCreateCourse.emit(true);
  }

}
