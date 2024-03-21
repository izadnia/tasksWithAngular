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
  projectsList: Projects[] = [
    {
      id: 1,
      title: 'خرید سیم کارت',
      initDate: '1402/12/19',
      finishDate: '1402/12/28',
      taskKey: 'simbuy123',
      finish: false,
    },
    {
      id: 2,
      title: 'پخش سیم کارت',
      initDate: '1402/12/19',
      finishDate: '1402/12/28',
      taskKey: 'simDis123',
      finish: false,
    },
    {
      id: 3,
      title: 'جلسه با اعضای تیم',
      initDate: '1402/12/19',
      finishDate: '1402/12/28',
      taskKey: 'simDiswweS123',
      finish: false,
    },
    {
      id: 4,
      title: 'جلسه با ذی نفعان پروژه',
      initDate: '1402/12/19',
      finishDate: '1402/12/28',
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

  postNewTask(data: Tasks): Observable<any> {
    this.tasksList.push(data);
    return of(true);
  }

  getprojectDetail(taskKey: string): Observable<any> {
    this.selectedProject = this.projectsList.filter(
      (m) => m.taskKey == taskKey
    )[0];
    this.selectedTask = this.tasksList.filter((m) => m.taskKey == taskKey);
    let array: any[] = [];
    array.push(this.selectedProject, this.selectedTask);
    return of(array);
  }

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
    let j = this.tasksList.filter((m) => m.taskKey == data)[0];
    this.deleteSingleTask(j);
    let i = this.projectsList.findIndex((m) => m.taskKey === data);
    this.projectsList.splice(i, 1);
    return of(this.projectsList);
  }
  deleteSingleTask(data: Tasks): Observable<Tasks[]> {
    let i = this.tasksList.findIndex(
      (m) =>
        m.title == data.title &&
        m.taskKey == data.taskKey &&
        m.actor == data.actor &&
        m.describtion == data.describtion
    );
    this.tasksList.splice(i, 1);
    return of(this.tasksList);
  }

  getTaskList(): Observable<Tasks[]> {
    return of(this.tasksList);
  }
}
