// src/app/activity-log/activity-log.component.spec.ts
import { TestBed, async } from '@angular/core/testing';
import { ActivityLogComponent } from './activity-log.component';

describe('ActivityLogComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ActivityLogComponent
      ],
    }).compileComponents();
  }));

  it('should create the component', () => {
    const fixture = TestBed.createComponent(ActivityLogComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'This page is Activity Log'`, () => {
    const fixture = TestBed.createComponent(ActivityLogComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('This page is Activity Log');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(ActivityLogComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('This page is Activity Log');
  });
});
