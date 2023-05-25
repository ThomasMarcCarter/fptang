import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActLogService } from '../act-log.service';
import { ActLog } from '../act-log';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-activity-log',
  templateUrl: './activity-log.component.html',
  styleUrls: ['./activity-log.component.css']
})
export class ActivityLogComponent implements OnInit, OnDestroy {
  activityLogs: ActLog[];
  subscription: Subscription | undefined;

  constructor(private actLogService: ActLogService) {
    this.activityLogs = [];
  }

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
      this.activityLogs = data.reverse();
    });
  }
}
