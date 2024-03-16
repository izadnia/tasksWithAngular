import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-define-task',
  templateUrl: './define-task.component.html',
  styleUrl: './define-task.component.scss'
})
export class DefineTaskComponent {
  @Output() taskSelected = new EventEmitter<string>();
  selectedTask : string = ''

  onFilterChange(){
    this.taskSelected.emit(this.selectedTask)
  }
}
