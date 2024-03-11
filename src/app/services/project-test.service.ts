import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Projects } from '../models/Projects';

@Injectable({
  providedIn: 'root',
})
export class ProjectTestService {
  constructor() {}

  projectsList: Projects[] = [
    {
      id: 1,
      title: 'خرید سیم کارت',
      initDate: 184657755351,
      finishDate: 194657755351,
      taskKey: 'simbuy123',
    },
    {
      id: 2,
      title: 'پخش سیم کارت',
      initDate: 184657755351,
      finishDate: 194657755351,
      taskKey: 'simDis123',
    },
  ];

  getProjectsList() : Observable<Projects[]>{
    return of(this.projectsList)
  }
}
