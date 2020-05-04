import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Article } from '../models/article.model';
import { Journalist } from '../models/journalist.model';
import { Tag } from '../models/tag.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpService: HttpService) { }

  getArticleById(id: string): Observable<Article> {
    return this.httpService.get(`json/article/${id}`).pipe(map(res => res[0] as Article));
  }

  getArticlesBySectionId(id: string): Observable<Article[]> {
    return this.httpService.get(`json/seccion/${id}`).pipe(map(res => res as Article[]));
  }

  getArticlesByAuthorId(id: string): Observable<Article[]> {
    return this.httpService.get(`json/article/author/${id}`).pipe(map(res => res as Article[]));
  }

  getArticlesByNodequeueName(name: string): Observable<Article[]> {
    return this.httpService.get(`json/nodequeue/${name}`).pipe(map(res => res as Article[]));
  }

  getJournalistById(id: string): Observable<Journalist> {
    return this.httpService.get(`json/journalist/${id}`).pipe(map(res => res[0] as Journalist));
  }

  getTagsByVocabularyId(id: string): Observable<Tag[]> {
    return this.httpService.get(`json/vocabulary/${id}`).pipe(map(res => res as Tag[]));
  }

  getJournalists(): Observable<Journalist[]> {
    return this.httpService.get('json/journalists').pipe(map(res => res as Journalist[]));
  }
}
