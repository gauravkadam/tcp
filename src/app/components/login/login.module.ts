import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  { path: '', component: LoginComponent }
];


@NgModule({
  declarations: [LoginComponent, SignInComponent, RegistrationComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [LoginComponent],
})
export class LoginModule { }
