// project service interface
import { Observable } from 'rxjs/Observable';

import { Project } from './project';

export interface IProjectService {

   getProjects(): Observable<Project[]>;

   getProjectById(id: number): Observable<Project>;

}





