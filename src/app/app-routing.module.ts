import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CvComponent } from './cv/cv.component';
import { CvResolver } from './cv/cv.resolver';
import { BluPreloadStrategy } from './app-routing-preloader';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectComponent } from './projects/project/project.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {state: 'home', preload: true}
  },
  {
    path: 'CV',
    component: CvComponent,
    data: {state: 'CV', preload: true}
    // resolve: {message: CvResolver}
  },
  {
    path: 'Projects',
    component: ProjectsComponent,
    data: {state: 'projects', preload: true}
  },
  {
    path: 'project/:id',
    component: ProjectComponent,
    data: {state: 'project/:id', preload: false}
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: BluPreloadStrategy})
  ],
  exports: [RouterModule],
  providers: [
    CvResolver,
    BluPreloadStrategy
  ]
})
export class AppRoutingModule { }
