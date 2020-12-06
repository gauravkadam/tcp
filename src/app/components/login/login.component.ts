import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

   isSignInPage: boolean;
   currImage: string;
   currentImg: number;

   constructor() {
      this.currImage = 'url(../../../assets/icons/left-panel1.png)';
   }

   ngOnInit() {
      this.isSignInPage = true;
      const leftPanel = ['url(../../../assets/icons/left-panel3.png)',
      'url(../../../assets/icons/left-panel1.png)',
      'url(../../../assets/icons/left-panel2.png)'];
      this.currImage = 'url(../../../assets/icons/left-panel1.png)';
      this.currentImg = 0;
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
