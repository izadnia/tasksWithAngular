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


deleteTask(data: string) {
  let selectedTask = this.taskList.filter((m:any) => m.taskKey == data)[0]
    .title;
  if (
    confirm(
      '  آیا اطمینان دارید از حذف  ' +
        '"' +
        selectedTask +
        '"' +
        ' و تسک هایش از تمامی لیست ها    '
    )
  ) {
    this.projectService
      .deleteSingleTask(data)
      .subscribe((m) => this.taskList = m);
      console.log(this.taskList)
    return alert(
      'پروژه ی ' +
        selectedTask +
        ' و تسک هایش از تمامی لیست ها حذف شدند   '
    );
  }
  return;
}

}
