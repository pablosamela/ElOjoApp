import { Injectable } from '@angular/core';
import { Params, Data } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  get(url: string ): Observable<Data> {
    const httpRequest$ ;


    return httpRequest$;
  }
}
