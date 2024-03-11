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
    {
      id: 3,
      title: 'جلسه با اعضای تیم',
      initDate: 184657755351,
      finishDate: 194657755351,
      taskKey: 'simDiswweS123',
    },
    {
      id: 4,
      title: 'جلسه با ذی نفعان پروژه',
      initDate: 184657755351,
      finishDate: 194657755351,
      taskKey: 'siersdSs123',
    },
  ];

  getProjectsList(): Observable<Projects[]> {
    return of(this.projectsList);
  }
  setNewProject(data: Projects): Observable<Projects[]> {
    this.projectsList.push(data);
    return of(this.projectsList);
  }
}
