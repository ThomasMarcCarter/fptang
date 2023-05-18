import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { Observable, interval, map, startWith } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-pg01',
  templateUrl: './pg01.component.html',
  styleUrls: ['./pg01.component.css'],
  animations: [
    trigger('slideInUpAnimation', [
      transition(':enter', [
        style({ transform: 'translateY(100%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateY(0%)' }))
      ]),
      transition(':leave', [
        animate('0.5s ease-in-out', style({ transform: 'translateY(100%)' }))
      ])
    ])
  ]
})
export class Pg01Component implements OnInit {
  constructor(public authService: AuthService, private router: Router) { } // Router injected here
  timer$: Observable<number> = new Observable();
  startTime: number = 0;

  ngOnInit() {
    this.startTime = Date.now();
    this.timer$ = interval(1000).pipe(
      startWith(0),
      map(() => Math.floor((Date.now() - this.startTime) / 1000))
    );
  }

}
