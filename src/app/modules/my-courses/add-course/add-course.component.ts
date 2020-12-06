import { Component, OnInit } from '@angular/core';




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

   constructor() { }

   ngOnInit(): void {
      const years = new Date().getFullYear();
      this.getYears(years);

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
