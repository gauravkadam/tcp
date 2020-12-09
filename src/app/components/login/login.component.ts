import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

   isSignInPage: boolean;
   currImage: string;
   currentImg = 0;

   constructor() {
   }

   ngOnInit() {
      this.isSignInPage = true;
      const leftPanel = ['url(../../../assets/icons/left-panel3.jpg)',
      'url(../../../assets/icons/left-panel1.jpg)',
      'url(../../../assets/icons/left-panel2.jpg)'];
      this.currImage = 'url(../../../assets/icons/left-panel1.jpg)';
      setInterval(() => {
         if (this.currentImg > 2) {
            this.currentImg = 0;
         }
         this.currImage = leftPanel[this.currentImg++];
       }, 10000);
   }

   gotoRegistrationPage() {
      this.isSignInPage = false;
   }

   gotoSignIn() {
      this.isSignInPage = true;
   }

   gotoSignIn1(data) {
      this.isSignInPage = true;
   }

}
