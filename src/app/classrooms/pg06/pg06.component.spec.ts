import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pg06Component } from './pg06.component';

describe('Pg06Component', () => {
  let component: Pg06Component;
  let fixture: ComponentFixture<Pg06Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pg06Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pg06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
