import { Component, Input } from '@angular/core';
import { PersianDatePipe } from '../../pipes/persian-date.pipe';

@Component({
  selector: 'app-lists-handlers',
  templateUrl: './lists-handlers.component.html',
  styleUrl: './lists-handlers.component.scss',
})
export class ListsHandlersComponent {
  @Input() incomeList: any[] = [];

  getColumnKeys(): string[] {
    if (this.incomeList.length === 0) {
      return [];
    }
    // Assume all incomeList have the same keys
    return Object.keys(this.incomeList[0]);
  }
  formatDate(date: number | null): Date | null {
    if (date === null) {
      return null;
    }
    return new Date(date);
  }
}
