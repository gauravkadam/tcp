import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyCourseService {

  public isViewTask = new Subject<boolean>();

  constructor(private http: HttpClient) { }

  addQuizTask(params) {
    return this.http.post(`${environment.host}api/task/addlesson`, params)
  }

  public setViewTask(value) {
    this.isViewTask.next(value);
  }

  public getViewTask(){
    return this.isViewTask.asObservable();
  }
}
