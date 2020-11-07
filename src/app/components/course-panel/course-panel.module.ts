import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursePanelComponent } from './course-panel.component';



@NgModule({
  declarations: [CoursePanelComponent],
  imports: [
    CommonModule
  ],
  exports: [CoursePanelComponent],
})
export class CoursePanelModule { }
