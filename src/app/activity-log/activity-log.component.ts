import { Component, OnInit } from '@angular/core';
import { ActLogService } from '../act-log.service'; // adjust the path as necessary
import { ActLog } from '../act-log';

@Component({
  selector: 'app-activity-log',
  templateUrl: './activity-log.component.html',
  styleUrls: ['./activity-log.component.css']
})
export class ActivityLogComponent implements OnInit {
  activityLogs: ActLog[];

  constructor(private actLogService: ActLogService) {
    this.activityLogs = [];
   }

  ngOnInit() {
    this.actLogService.findAll().subscribe(data => {
      this.activityLogs = data;
    });
  }
}
