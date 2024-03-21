import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Projects } from '../../../../models/Projects';
import { ProjectTestService } from '../../../../services/project-test.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss',
})
export class NewTaskComponent {
  fullUrl: any;
  constructor(
    private projectService: ProjectTestService,
    private router: Router
  ) {}
  stepNumber: number = 0;
  itemSelected: any = '';
  actorSelected: any = '';
  taskSelected: string = '';
  projectSelected: Projects[] = [];
  showModal: boolean = false;
  hasBeenSent: boolean = false;

  toggleModal() {
    this.showModal = !this.showModal;
    if(this.hasBeenSent){
      this.itemSelected = '';
      this.actorSelected = '';
      this.taskSelected = '';
      this.stepNumber = 0;
    }
  }

  onProjectSelected(selectedProject: any) {
    this.itemSelected = selectedProject;
  }
  onActorSelected(selectedActor: any) {
    this.actorSelected = selectedActor;
  }
  onTaskSelected(selectedTask: any) {
    this.taskSelected = selectedTask;
  }
  onSubmit() {
    let data = {
      title: this.itemSelected,
      taskKey: this.projectSelected[0].taskKey,
      actor: this.actorSelected,
      describtion: this.taskSelected,
    };
    this.projectService.postNewTask(data).subscribe((m) => {
      if (m) {
        this.hasBeenSent = true;
        this.toggleModal();
      } else {
        this.toggleModal();
      }
    });
  }

  routToTasks() {
    this.router.navigate(['tasks']);
  }
  nextStep() {
    if (
      (this.itemSelected == '' && this.stepNumber == 1) ||
      (this.actorSelected == '' && this.stepNumber == 2) ||
      (this.taskSelected == '' && this.stepNumber == 3)
    ) {
      this.toggleModal();
    } else {
      if (this.stepNumber == 1) {
        this.projectService.getProjectsList().subscribe((m) => {
          this.projectSelected = m.filter((i) => i.title == this.itemSelected);
        });
        this.stepNumber = this.stepNumber + 1;
      } else {
        this.stepNumber = this.stepNumber + 1;
      }
    }
  }
  prevStep() {
    if (this.stepNumber == 2) {
      this.itemSelected = '';
      this.actorSelected = '';
      this.stepNumber = this.stepNumber - 1;
    } else if (this.stepNumber == 3) {
      this.actorSelected = '';
      this.taskSelected = '';
      this.stepNumber = this.stepNumber - 1;
    } else {
      this.stepNumber = this.stepNumber - 1;
    }
  }
}
