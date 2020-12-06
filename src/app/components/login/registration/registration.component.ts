import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
   selector: 'app-registration',
   templateUrl: './registration.component.html',
   styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

   username = '';
   password = '';
   confpassword = '';
   isValidMail: boolean;
   isValidPassword: boolean;
   isValidData: boolean;
   firstName: string;
   lastName: string;
   isValidConfPassword: boolean;
   @Output() signInPage = new EventEmitter<boolean>();

   constructor() { }

   ngOnInit(): void {
      this.firstName = '';
      this.lastName = '';
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
      if (this.confpassword !== '') {
         this.onConfirmPassChange(this.confpassword);
      }
   }

   onConfirmPassChange(confPass) {
      this.isValidConfPassword = this.password !== confPass;
      this.isValidData = this.checkValidData();
   }


   validateInput(input, passRegEx) {
      if (!input.match(passRegEx)) {
         return true;
      }
      return false;
   }

   register() {
      this.signInPage.emit(true);
   }

   firstNameChange(fName: string) {
      this.isValidData = this.checkValidData();
   }

   lastNameChange(lName: string) {
      this.isValidData = this.checkValidData();
   }

   checkValidData() {
      return (!this.isValidMail && !this.isValidPassword  && !this.isValidConfPassword && this.username !== '' &&
         this.password !== '' && this.firstName !== '' && this.lastName !== '' && this.confpassword !== '');
   }

}
