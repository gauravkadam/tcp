import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuplicateCoursePanelComponent } from './duplicate-course-panel.component';

describe('DuplicateCoursePanelComponent', () => {
  let component: DuplicateCoursePanelComponent;
  let fixture: ComponentFixture<DuplicateCoursePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuplicateCoursePanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DuplicateCoursePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
