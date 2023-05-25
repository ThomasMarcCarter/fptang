import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pg04Component } from './pg04.component';

describe('Pg04Component', () => {
  let component: Pg04Component;
  let fixture: ComponentFixture<Pg04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pg04Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pg04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
