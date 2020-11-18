import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForumComponent } from './forum.component';
import { Routes, RouterModule } from '@angular/router';
import { SideMenuModule } from 'src/app/components/side-menu/side-menu.module';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {
    path: '', component: ForumComponent, children: [
      { path: 'dd', component: DashboardComponent },
      { path: '', redirectTo: 'dd', pathMatch: 'full' }
    ]
  },
];

@NgModule({
  declarations: [ForumComponent, DashboardComponent],
  imports: [
    CommonModule,
    SideMenuModule,
    RouterModule.forChild(routes)
  ]
})
export class ForumModule { }
