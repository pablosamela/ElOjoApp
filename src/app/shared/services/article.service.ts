import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { map, mergeMap, take } from 'rxjs/operators';
import { Article } from '../models/article.model';
import { Journalist } from '../models/journalist.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private httpService: HttpService) { }

  getArticleById(id: any): Observable<Article> {
    return this.httpService.get(`json/article/${id}`).pipe(
      map(res => res[0] as Article)
    );

  }

  getJournalistById(id: number): Observable<Journalist>{
    return this.httpService.get(`json/journalist/${id}`).pipe(
      map(res => res[0] as Journalist)
    );
  }
}
