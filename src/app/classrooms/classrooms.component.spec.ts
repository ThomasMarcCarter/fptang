// src/app/classrooms/classrooms.component.spec.ts
import { TestBed, async } from '@angular/core/testing';
import { ClassroomsComponent } from './classrooms.component';

describe('ClassroomsComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ClassroomsComponent
      ],
    }).compileComponents();
  }));

  it('should create the component', () => {
    const fixture = TestBed.createComponent(ClassroomsComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'This page is Classrooms'`, () => {
    const fixture = TestBed.createComponent(ClassroomsComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('This page is Classrooms');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(ClassroomsComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('This page is Classrooms');
  });
});
