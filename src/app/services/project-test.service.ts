import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { Projects } from '../models/Projects';
import { Tasks } from '../models/Tasks';

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
      finish: false,
    },
    {
      id: 2,
      title: 'پخش سیم کارت',
      initDate: 184657755351,
      finishDate: 194657755351,
      taskKey: 'simDis123',
      finish: false,
    },
    {
      id: 3,
      title: 'جلسه با اعضای تیم',
      initDate: 184657755351,
      finishDate: 194657755351,
      taskKey: 'simDiswweS123',
      finish: false,
    },
    {
      id: 4,
      title: 'جلسه با ذی نفعان پروژه',
      initDate: 184657755351,
      finishDate: 194657755351,
      taskKey: 'siersdSs123',
      finish: false,
    },
  ];
  tasksList: Tasks[] = [
    {
      taskKey: 'simbuy123',
      actor: 'Mohammad reza',
      describtion: 'در اسرع وقت انجام میدم ببخشید دیر شده',
    },
    {
      taskKey: 'simDis123',
      actor: 'Mohammad reza',
      describtion: 'در اسرع وقت انجام میدم ببخشید دیر شده',
    },
    {
      taskKey: 'simDiswweS123',
      actor: 'Mohammad reza',
      describtion: 'در اسرع وقت انجام میدم ببخشید دیر شده',
    },
    {
      taskKey: 'siersdSs123',
      actor: 'Mohammad reza',
      describtion: 'در اسرع وقت انجام میدم ببخشید دیر شده',
    },
  ];
  getProjectsList(): Observable<Projects[]> {
    return of(this.projectsList);
  }
  setNewProject(data: Projects): Observable<any> {
    const lastId = this.projectsList.length + 1;
    data.id = lastId;
    let key = '';
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 6; i++) {
      key += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    data.taskKey = key;
    data.finish = false;
    this.projectsList.push(data);
    return of(data);
  }

  getTaskList(): Observable<Tasks[]> {
    return of(this.tasksList);
  }
}
