import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-pg01',
  templateUrl: './pg02.component.html',
  styleUrls: ['./pg02.component.css'],
  animations: [
    trigger('slideInDownAnimation', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateY(0%)' }))
      ]),
      transition(':leave', [
        animate('0.5s ease-in-out', style({ transform: 'translateY(-100%)' }))
      ])
    ])
  ]
})
export class Pg02Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
