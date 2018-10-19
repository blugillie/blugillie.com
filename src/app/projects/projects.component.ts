import { Component, OnInit, Inject } from '@angular/core';

import { IProjectService } from './iproject.service';
import { Project } from './project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.less']
})
export class ProjectsComponent implements OnInit {

  projects: Project[];

  showProjectButton: boolean;

  constructor(@Inject('ProjectService') private projectService: IProjectService) { }

  ngOnInit() {
    this.getProjects();
    this.showProjectButton = false;
  }

  getProjects(): void {
    this.projectService.getProjects().subscribe(x => this.projects = x);
  }

}
