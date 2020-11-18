import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent  {

  public forumData = [
    {
      name: 'Andreas Brixen',
      askedOn: 'Oct 23 2020',
      question: 'Is unit testing worth the effort?',
      answer: 'I am working to integrate testing unit testing into development process on the team I work on and there are some sceptics. What are some good way to convience',
      like: 23
    },
    {
      name: 'Gaurav Kadam',
      askedOn: 'Nov 21 2020',
      question: 'Is unit testing worth the effort?',
      answer: 'I am working to integrate testing unit testing into development process on the team I work on and there are some sceptics. What are some good way to convience',
      like: 45
    }
  ]

  constructor() { }


}
