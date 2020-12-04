import { Component, OnInit } from '@angular/core';
import { MyCourseService } from 'src/app/services/my-course.service';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.scss']
})
export class ViewTaskComponent implements OnInit {

  public quizStage = 1;

  constructor(private service:MyCourseService) { }

  ngOnInit(): void {
  }

  addTask(){
    this.service.setViewTask(true);
  }


}
