import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(
    private http: HttpClient,
    @Inject('ApiUrl') private apiUrl: string
  ) { }

  get<T>(url: string): Observable<T> {

    const fullUrl = this.apiUrl + url;

    return this.http.get<T>(fullUrl);
  }

}
