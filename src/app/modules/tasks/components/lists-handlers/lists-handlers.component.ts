import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tasks } from '../../../../models/Tasks';
import { PersianDatePipe } from '../../../projects/pipes/persian-date.pipe';

@Component({
  selector: 'app-lists-handlers',
  templateUrl: './lists-handlers.component.html',
  styleUrl: './lists-handlers.component.scss',
})
export class ListsHandlersComponent {
  @Input() incomeList: any[] = [];
  @Output() deletekeyEmitted = new EventEmitter<any>();

  translationMap: any = {
    title: 'عنوان',
    taskKey: 'اقدام',
    actor: 'اقدام کننده',
    describtion :'توضیحات'
  };

  getColumnKeys(): string[] {
    if (this.incomeList.length === 0) {
      return [];
    }
    return Object.keys(this.translationMap);
  }
  formatDate(date: number | null): Date | null {
    if (date === null) {
      return null;
    }
    return new Date(date);
  }

  deleteTask(data : Tasks){
    this.deletekeyEmitted.emit(data); 
  }
}
