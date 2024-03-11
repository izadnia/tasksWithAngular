import { Component } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';
import { finalize } from 'rxjs';
import { ProjectTestService } from '../../../../services/project-test.service';

@Component({
  selector: 'app-post-project',
  templateUrl: './post-project.component.html',
  styleUrl: './post-project.component.scss',
})
export class PostProjectComponent {

  constructor(
    private projectService: ProjectTestService,
    private router: Router
  ) {}

  item: any = {};

  ngOnInit(): void {}

  productModel: any;

  titleCheckFlag: boolean = false;
  initDateCheckFlag: boolean = false;
  finishDateCheckFlag: boolean = false;
  readyToSend = false;

  flagCheck() {
    this.item.initDate == undefined
      ? (this.initDateCheckFlag = false)
      : (this.initDateCheckFlag = true);
    this.item.finishDate == undefined
      ? (this.finishDateCheckFlag = false)
      : (this.finishDateCheckFlag = true);
    this.item.titleCheckFlag == undefined
      ? (this.titleCheckFlag = false)
      : (this.titleCheckFlag = true);
    if (
      this.initDateCheckFlag ||
      this.finishDateCheckFlag ||
      this.titleCheckFlag
    ) {
      this.readyToSend = true;
    }
    return;
  }

  onSubmit() {
    this.flagCheck();
    if (this.readyToSend) {
      this.projectService.setNewProject(this.item).subscribe((Response) => {
        if (Response.title == this.item.title) {
          alert('با موفقیت اضافه شد');
          this.router.navigate(['projects']);
        } else alert('یه مشکلی پیش اومد');
      });
    } else {
      this.titleCheckFlag == false
        ? alert('وارد کردن نام پروژه الزامی است')
        : null;
      this.initDateCheckFlag == false
        ? alert('وارد کردن زمان شروع پروژه الزامی است')
        : null;
      this.finishDateCheckFlag == false
        ? alert('وارد کردن زمان خاتمه پروژه الزامی است')
        : null;
    }
  }
}
