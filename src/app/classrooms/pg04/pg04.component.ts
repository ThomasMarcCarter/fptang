import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActLogService } from '../../act-log.service';
import { ActLog } from '../../act-log';
import { Subscription, interval } from 'rxjs';
import { ColDef, GridReadyEvent } from 'ag-grid-community';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-pg04',
  templateUrl: './pg04.component.html',
  styleUrls: ['./pg04.component.css']
})
export class Pg04Component implements OnInit, OnDestroy {
  activityLogs: ActLog[] = [];
  subscription: Subscription | undefined;

  @ViewChild('agGrid') agGrid: AgGridAngular | undefined;

  columnDefs: ColDef[] = [
    { headerName: '#ID', field: 'logEntryId', sortable: true, filter: true },
    { headerName: 'Student Name', field: 'studentId', sortable: true, filter: true },
    { headerName: 'Time-in-room', field: 'logTime', sortable: true, filter: true },
    { headerName: 'Location', field: 'logLocation', sortable: true, filter: true },
  ];

  constructor(private actLogService: ActLogService) {}

  ngOnInit() {
    this.fetchData(); // Fetch data instantly at first
    this.subscription = interval(5000).subscribe(() => {
      this.fetchData();
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private fetchData() {
    this.actLogService.findAll().subscribe(data => {
      // Group logs by studentId
      const groupedLogs: { [key: string]: ActLog[] } = {};
      for (const log of data) {
        if (!groupedLogs[log.studentId]) {
          groupedLogs[log.studentId] = [];
        }
        groupedLogs[log.studentId].push(log);
      }

      // Select the most recent log for each student
      const mostRecentLogs: ActLog[] = [];
      for (const studentId in groupedLogs) {
        const studentLogs = groupedLogs[studentId];
        studentLogs.sort((a, b) => new Date(b.logTime || '').getTime() - new Date(a.logTime || '').getTime()); // sort in descending order
        const mostRecentLog = studentLogs[0]; // pick the most recent
        if (mostRecentLog && mostRecentLog.logLocation === 4) {
          mostRecentLogs.push(mostRecentLog);
        }
      }

      // Update activityLogs with the most recent logs
      this.activityLogs = mostRecentLogs.reverse();
    });
  }

  onGridReady(params: GridReadyEvent) {
    params.api.sizeColumnsToFit();
  }
}
