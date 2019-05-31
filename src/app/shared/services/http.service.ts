import { Injectable } from '@angular/core';
import { Data } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { settings } from '@app/settings/app.settings';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  get(url: string ): Observable<Data> {
    return this.http.get(settings.endpoint + url);
  }
}
