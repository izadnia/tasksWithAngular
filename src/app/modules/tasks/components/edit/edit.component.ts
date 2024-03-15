import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { ProjectTestService } from '../../../../services/project-test.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent {
  constructor(
    private projectService: ProjectTestService,
    private rout: ActivatedRoute
  ) {}
  initDateValue = new FormControl();
  finishDateValue = new FormControl();
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
