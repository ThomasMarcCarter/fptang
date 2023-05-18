import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pg01Component } from './pg01.component';

describe('Pg01Component', () => {
  let component: Pg01Component;
  let fixture: ComponentFixture<Pg01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pg01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pg01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
