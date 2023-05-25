import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActLogService } from '../act-log.service';
import { ActLog } from '../act-log';
import { Subscription, interval, Observable } from 'rxjs';
import { ColDef, GridReadyEvent } from 'ag-grid-community';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-activity-log',
  templateUrl: './activity-log.component.html',
  styleUrls: ['./activity-log.component.css']
})
export class ActivityLogComponent implements OnInit, OnDestroy {
  public columnDefs: ColDef[] = [
    { headerName: 'Log ID', field: 'logEntryId', sortable: true, filter: true },
    { headerName: 'Student ID', field: 'studentId', sortable: true, filter: true },
    { headerName: 'Log Location', field: 'logLocation', sortable: true, filter: true },
    { headerName: 'Log Time', field: 'logTime', sortable: true, filter: true },
  ];

  public rowData$!: Observable<ActLog[]>;

  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;
  
  private subscription: Subscription | undefined;

  // Flag to keep track of refresh state
  isRefreshing = false;

  constructor(private actLogService: ActLogService) {}

  ngOnInit() {
    // No refreshing by default
    this.onGridReady
  }

  ngOnDestroy() {
    this.stopRefreshing();
  }

  onGridReady(params?: GridReadyEvent) {
    this.rowData$ = this.actLogService.findAll();
    params?.api.sizeColumnsToFit({
      defaultMinWidth: 100
    });
  }

  toggleRefresh() {
    if (this.isRefreshing) {
      this.stopRefreshing();
    } else {
      this.startRefreshing();
    }
  }

  private startRefreshing() {
    this.subscription = interval(5000).subscribe(() => {
      this.onGridReady();
    });
    this.isRefreshing = true;
  }

  private stopRefreshing() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.isRefreshing = false;
  }
  public defaultColDef = {
    sortable: true, // columns are sortable
  };
  public gridOptions = {
    defaultSortModel: [
      { colId: 'logTime', sort: 'desc' }
    ],
  };
  
}
