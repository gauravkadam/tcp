import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyCourseService {

  constructor(private http: HttpClient) { }

  addQuizTask(params) {
    return this.http.post(`${environment.host}api/task/addlesson`, params)
  }
}
