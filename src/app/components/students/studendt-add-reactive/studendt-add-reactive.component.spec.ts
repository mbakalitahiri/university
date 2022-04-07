import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudendtAddReactiveComponent } from './studendt-add-reactive.component';

describe('StudendtAddReactiveComponent', () => {
  let component: StudendtAddReactiveComponent;
  let fixture: ComponentFixture<StudendtAddReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudendtAddReactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudendtAddReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
