import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-duplicate-course-panel',
  templateUrl: './duplicate-course-panel.component.html',
  styleUrls: ['./duplicate-course-panel.component.scss']
})
export class DuplicateCoursePanelComponent implements OnInit {

  constructor(private sharedService:SharedService, private router: Router) { }

  ngOnInit(): void {
    this.sharedService.activeHeaderTitle = 'ADD A NEW COURSE';
  }
  public onCreateCourse(data){
    this.sharedService.setSideMenuCollapse(true);
    this.router.navigate(['/my-courses/add-course'])
  }
}
