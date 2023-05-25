import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pg05Component } from './pg05.component';

describe('Pg05Component', () => {
  let component: Pg05Component;
  let fixture: ComponentFixture<Pg05Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pg05Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pg05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
