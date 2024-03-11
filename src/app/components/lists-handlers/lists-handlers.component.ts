import { Component, Input } from '@angular/core';

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
}
