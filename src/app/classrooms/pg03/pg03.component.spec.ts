import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pg03Component } from './pg03.component';

describe('Pg03Component', () => {
  let component: Pg03Component;
  let fixture: ComponentFixture<Pg03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pg03Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pg03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
