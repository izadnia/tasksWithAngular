import { Component } from '@angular/core';
import { Tasks } from '../../../../models/Tasks';
import { ProjectTestService } from '../../../../services/project-test.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  taskService: any;



  constructor(private projectService : ProjectTestService){}
  taskList : any
  ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.projectService.getTaskList().subscribe((data)=>{ this.taskList = data})
}


deleteTask(data: Tasks) {

  let selectedTask =     
  this.taskList.filter(
    (m: any) =>
      m.taskKey == data.taskKey &&
      m.actor == data.actor &&
      m.describtion == data.describtion
  )[0].title;

  if (
    confirm(
      '  آیا از حذف تسک :  ' +
        '"' +
        selectedTask +
        '"' +
        ' اطمینان دارید '
    )
  ) {
    this.projectService
      .deleteSingleTask(data)
      .subscribe((m) => this.taskList = m);
    return alert(
      ' تسک :  ' +
        selectedTask +
        ' با موفقیت حذف شد، شما میتوانید تسک جدید تعریف کنید  '
    );
  }
  return;
}

}
