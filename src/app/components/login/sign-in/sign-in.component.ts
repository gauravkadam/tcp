import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
   selector: 'app-sign-in',
   templateUrl: './sign-in.component.html',
   styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

   username = '';
   password = '';
   isValidMail: boolean;
   isValidPassword: boolean;
   isValidData: boolean;

   constructor(private router: Router) { }

   ngOnInit(): void {
      this.username = '';
   }

   onEmailChange(str) {
      const reEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      this.isValidMail = this.validateInput(str, reEmail);
      this.isValidData = this.checkValidData();
   }

   onPassChange(pass) {
      const passRegEx = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
      this.isValidPassword = this.validateInput(pass, passRegEx);
      this.isValidData = this.checkValidData();
   }


   validateInput(input, passRegEx) {
      if (!input.match(passRegEx)) {
        return true;
      }
      return false;
    }

   submit() {
      this.router.navigateByUrl('/my-courses');
   }

   checkValidData() {
      return (!this.isValidMail && !this.isValidPassword && this.username !== '' &&
      this.password !== '');
   }

}
