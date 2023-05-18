// src/app/classrooms/classrooms.component.ts
import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-classrooms',
  templateUrl: './classrooms.component.html',
  styleUrls: ['./classrooms.component.css']
})

export class ClassroomsComponent implements OnInit {
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
