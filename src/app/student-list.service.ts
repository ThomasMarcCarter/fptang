import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentList } from './student-list';

@Injectable({
  providedIn: 'root'
})
export class StudentListService {
  private apiUrl = 'http://77.99.153.55:8080/api/v1/students';

  constructor(private http: HttpClient) { }

  public findAll(): Observable<StudentList[]> {
    return this.http.get<StudentList[]>(this.apiUrl);
  }
}
