import { Component, OnInit } from '@angular/core';
import { StudentListService } from '../student-list.service'; // adjust the path as necessary
import { StudentList } from '../student-list';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  studentList: StudentList[];

  constructor(private studentListService: StudentListService) {
    this.studentList = [];
   }

  ngOnInit() {
    this.studentListService.findAll().subscribe(data => {
      this.studentList = data;
    });
  }
}
