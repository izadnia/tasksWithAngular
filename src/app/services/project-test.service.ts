import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { Projects } from '../models/Projects';
import { Tasks } from '../models/Tasks';

@Injectable({
  providedIn: 'root',
})
export class ProjectTestService {
  selectedProject: any;
  selectedTask: any;

  getprojectDetail(taskKey: string): Observable<any> {
    this.selectedProject = this.projectsList.filter(
      (m) => m.taskKey == taskKey
    )[0];
    this.selectedTask = this.tasksList.filter((m) => m.taskKey == taskKey);
    let array: any[] = [];
    array.push(this.selectedProject, this.selectedTask);
    return of(array);
  }
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
      title: 'خرید سیم کارت',
      taskKey: 'simbuy123',
      actor: 'دفتر بیمه ایران',
      describtion: 'به زودی مبلغ پیش پرداخت واریز میشه',
    },
    {
      title: 'پخش سیم کارت',
      taskKey: 'simDis123',
      actor: 'نماینده ترکیه',
      describtion: 'مشکل در اخذ جواز ',
    },
    {
      title: 'جلسه با اعضای تیم',
      taskKey: 'simDiswweS123',
      actor: 'معاونت نیروی انسانی',
      describtion: 'اطلاع رسانی شده',
    },
    {
      title: 'جلسه با ذی نفعان پروژه',
      taskKey: 'siersdSs123',
      actor: 'دکتر کلهر',
      describtion: 'منتظر جواب بقیه هستم',
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

  deleteSingleProject(data: string): Observable<Projects[]> {
    this.projectsList.splice(
      this.projectsList.findIndex((m) => (m.taskKey = data)) - 1,
      1
    );
    return of(this.projectsList);
  }

  getTaskList(): Observable<Tasks[]> {
    return of(this.tasksList);
  }
}
