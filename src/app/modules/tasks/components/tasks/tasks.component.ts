import { Component } from '@angular/core';
import { Tasks } from '../../../../models/Tasks';
import { ProjectTestService } from '../../../../services/project-test.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {



  constructor(private projectService : ProjectTestService){}
  taskList : Tasks[] = []
  ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.projectService.getTaskList().subscribe((data)=>{ this.taskList = data})
}





}
