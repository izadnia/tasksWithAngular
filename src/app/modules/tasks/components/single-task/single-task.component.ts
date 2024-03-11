import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProjectTestService } from '../../../../services/project-test.service';

@Component({
  selector: 'app-single-task',
  templateUrl: './single-task.component.html',
  styleUrl: './single-task.component.scss',
})
export class SingleTaskComponent {
  constructor(
    private projectService: ProjectTestService,
    private rout: ActivatedRoute
  ) {}

  selectedProject: any;
  pageKey: string = '';
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.rout.params.subscribe((params: Params) => {
      this.projectService.getprojectDetail(params['id']).subscribe((income) => {
        this.selectedProject = income;
      });
    });
  }
}
