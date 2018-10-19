import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { IProjectService } from './iproject.service';
import { Project } from './project';

@Injectable()
export class ProjectService implements IProjectService {

   private projectsUrl = this.apiUrl + 'projects';
   private projects: Observable<Project[]>;

   constructor(
      private http: HttpClient,
      @Inject('ApiUrl') private apiUrl: string
   ) {}

   getProjects(): Observable<Project[]> {
      return this.http.get<Project[]>(this.projectsUrl);
   }

   getProjectById(id: number): Observable<Project> {
      return this.http.get<Project>(`${this.projectsUrl}/${id}`);
   }


}
