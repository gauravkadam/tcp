import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public sideMenuCollapse = new Subject<boolean>();

  constructor() { }

  public setSideMenuCollapse(value) {
    this.sideMenuCollapse.next(value);
  }

  public getSideMenuCollapse(){
    return this.sideMenuCollapse.asObservable();
  }
}
