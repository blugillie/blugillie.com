import { ProjectService } from '../app/projects/project.service';

export const environment = {
  production: true,
  apiUrl: 'http://localhost:50517/api/',
  projectServiceType: ProjectService
};
