import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonPanelComponent } from './lesson-panel.component';



@NgModule({
  declarations: [LessonPanelComponent],
  imports: [
    CommonModule
  ],
  exports: [LessonPanelComponent],
})
export class LessonPanelModule { }
