import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentListService } from '../student-list.service'; // adjust the path as necessary
import { StudentList } from '../student-list';
import { ColDef, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  studentList: StudentList[];

  public columnDefs: ColDef[] = [
    { headerName: 'Student ID', field: 'studentId', sortable: true, filter: true },
    { headerName: 'Student Name', field: 'studentName', sortable: true, filter: true },
  ];

  public rowData$!: Observable<StudentList[]>;

  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  constructor(private studentListService: StudentListService) {
    this.studentList = [];
   }

   ngOnInit() {

   }

   onGridReady(params: GridReadyEvent) {
     this.rowData$ = this.studentListService.findAll();
     params.api.sizeColumnsToFit({
      defaultMinWidth: 100
    });
   }
}
