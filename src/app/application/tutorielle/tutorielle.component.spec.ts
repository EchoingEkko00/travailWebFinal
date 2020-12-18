import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorielleComponent } from './tutorielle.component';

describe('TutorielleComponent', () => {
  let component: TutorielleComponent;
  let fixture: ComponentFixture<TutorielleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorielleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorielleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
