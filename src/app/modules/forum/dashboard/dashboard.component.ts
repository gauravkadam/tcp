import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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
      like: 23,
      commentsVisible: false
    },
    {
      name: 'Gaurav Kadam',
      askedOn: 'Nov 21 2020',
      question: 'Is unit testing worth the effort?',
      answer: 'I am working to integrate testing unit testing into development process on the team I work on and there are some sceptics. What are some good way to convience',
      like: 45,
      commentsVisible: false
    }
  ];

  public forumForm = this.fb.group({
    question: ['', Validators.required],
    desc: ['', Validators.required],
  });

  public commentForm = this.fb.group({
    comment: [''],
  });

  constructor(private fb:FormBuilder){ }


  public addComment(index){
    this.forumData[index].commentsVisible =  !this.forumData[index].commentsVisible
  }

  public submitComment(){
    console.log(this.commentForm.value);
  }

  public submitForm(){
    console.log(this.forumForm.value);
  }

}
