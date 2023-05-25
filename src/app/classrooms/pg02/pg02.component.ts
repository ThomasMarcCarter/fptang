import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { ActLogService } from '../../act-log.service';
import { ActLog } from '../../act-log';
import { interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-pg02',
  templateUrl: './pg02.component.html',
  styleUrls: ['./pg02.component.css'],
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
export class Pg02Component implements OnInit {
  activityLogs: ActLog[] = [];
  mostRecentLogs: ActLog[] = [];

  constructor(private actLogService: ActLogService) { }

  ngOnInit(): void {
    interval(5000).pipe(
      startWith(0),
      switchMap(() => this.actLogService.findAll())
    ).subscribe(logs => {
      console.log('Service response:', logs);  // Check service response
      
      // Group logs by studentId
      const groupedLogs: { [key: string]: ActLog[] } = {};

      for (const log of logs) {
        if (!groupedLogs[log.studentId]) {
          groupedLogs[log.studentId] = [];
        }
        groupedLogs[log.studentId].push(log);
      }

      console.log('Grouped logs:', groupedLogs);  // Check grouped logs
      
      // For each group, sort logs by logTime in descending order and pick the first log (i.e., the most recent)
      const mostRecentLogs: ActLog[] = [];
      for (const studentId in groupedLogs) {
        const studentLogs = groupedLogs[studentId];
        studentLogs.sort((a, b) => new Date(b.logTime || '').getTime() - new Date(a.logTime || '').getTime()); // sort in descending order
        mostRecentLogs.push(studentLogs[0]); // pick the most recent
      }

      console.log('Most recent logs:', mostRecentLogs);  // Check most recent logs

      // Filter out logs not in classroom 1
      const logsInClassroom1 = mostRecentLogs.filter(log => log.logLocation === 2);

      // Do something with logsInClassroom1...
      this.activityLogs = logsInClassroom1;

      console.log('Activity Logs:', this.activityLogs);  // Check activityLogs
      return logsInClassroom1;
    });
  }
}
