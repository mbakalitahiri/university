import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsCalificationsComponent } from './students-califications.component';

describe('StudentsCalificationsComponent', () => {
  let component: StudentsCalificationsComponent;
  let fixture: ComponentFixture<StudentsCalificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsCalificationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsCalificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
