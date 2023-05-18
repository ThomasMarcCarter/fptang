import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pg02Component } from './pg02.component';

describe('Pg01Component', () => {
  let component: Pg02Component;
  let fixture: ComponentFixture<Pg02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pg02Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pg02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
