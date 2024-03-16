import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Projects } from '../../../../models/Projects';
import { ProjectTestService } from '../../../../services/project-test.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss',
})
export class NewTaskComponent {
  fullUrl: any;
  constructor(private router: Router) {}
  stepNumber: number = 0;
  itemSelected: any = '';
  actorSelected : any = '';
  taskSelected : string = '';
  showModal = false;

  toggleModal() {
    this.showModal = !this.showModal;
  }

  onProjectSelected(selectedProject: any) {
    this.itemSelected = selectedProject;
  }
  onActorSelected(selectedActor : any){
    this.actorSelected = selectedActor
  }
  onTaskSelected(selectedTask : any){
    this.taskSelected = selectedTask
  }
  nextStep() {
    if (
      (this.itemSelected == '' && this.stepNumber == 1) ||
      (this.actorSelected == '' && this.stepNumber == 2 ) ||
      (this.taskSelected == ''  && this.stepNumber == 3)
    ) {
      this.toggleModal();
    } else {
      this.stepNumber = this.stepNumber + 1;
    }
  }
  prevStep() {
    this.stepNumber = this.stepNumber - 1;
  }
}
