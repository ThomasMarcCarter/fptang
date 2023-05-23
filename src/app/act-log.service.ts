import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActLog } from './act-log';

@Injectable({
  providedIn: 'root'
})
export class ActLogService {
  private apiUrl = 'http://77.99.153.55:8080/api/v1/activityLogs';

  constructor(private http: HttpClient) { }

  public findAll(): Observable<ActLog[]> {
    return this.http.get<ActLog[]>(this.apiUrl);
  }
}
