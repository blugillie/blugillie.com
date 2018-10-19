import { Component, OnInit, Input, Inject, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

import { Project } from '../project';
import { IProjectService } from '../iproject.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.less']
})
export class ProjectComponent implements OnInit, OnDestroy {


  @Input() project: Project;

  navigationSubscription: Subscription;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    @Inject('ProjectService') private projectService: IProjectService) { }

  ngOnInit() {
    this.getProject();
    this.subscribeToNavigation();

    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
    };

    this.router.routeReuseStrategy.shouldDetach = function() {
      return true;
    };
  }

  ngOnDestroy(): void {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

  getProject() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.projectService.getProjectById(id).subscribe(x => this.project = x);
  }

  subscribeToNavigation() {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        // this.ngOnInit();
        // this.router.navigated = false;
        // this.router.navigate([this.router.url]);
      }
    });
  }

}
