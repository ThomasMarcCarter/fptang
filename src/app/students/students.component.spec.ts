// src/app/students/students.component.spec.ts
import { TestBed, async } from '@angular/core/testing';
import { StudentsComponent } from './students.component';

describe('StudentsComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        StudentsComponent
      ],
    }).compileComponents();
  }));

  it('should create the component', () => {
    const fixture = TestBed.createComponent(StudentsComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'This page is Students'`, () => {
    const fixture = TestBed.createComponent(StudentsComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('This page is Students');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(StudentsComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('This page is Students');
  });
});
