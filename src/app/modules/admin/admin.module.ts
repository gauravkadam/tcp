import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { Routes, RouterModule } from '@angular/router';
import { ApprovalComponent } from './approval/approval.component';
import { HeaderModule } from 'src/app/components/header/header.module';


const routes: Routes = [
  { path: '', component: AdminComponent, children: [
    { path: 'approval', component: ApprovalComponent },
    { path: '', redirectTo: 'approval', pathMatch: 'full' }
  ]},

]



@NgModule({
  declarations: [AdminComponent, ApprovalComponent],
  imports: [
    CommonModule,
    HeaderModule,
    RouterModule.forChild(routes),
  ]
})
export class AdminModule { }
