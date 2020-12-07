import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';




@Component({
   selector: 'app-add-course',
   templateUrl: './add-course.component.html',
   styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {

   courseNames = ['Web-developement', 'Data Analyst', 'Machine Learning', 'Artificial Intelligence'];
   courseLevel = ['Beginner', 'Intermediate', 'Advanced'];
   currentYear: number;
   yearsList = [];

   constructor(private sharedService:SharedService) { }

   ngOnInit(): void {
      const years = new Date().getFullYear();
      this.getYears(years);
      this.sharedService.activeHeaderTitle = 'ADD A NEW COURSE';

   }

   getYears(year: number) {
      for (let i = 0; i  < 10; i++) {
         this.yearsList.push(year);
         year++;
      }
   }

   setDate(value) {
     console.log(value);
   }

}
