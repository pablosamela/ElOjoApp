import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Article } from '../models/article.model';
import { Journalist } from '../models/journalist.model';
import { Tag } from '../models/tag.model';
import { HttpClient } from '@angular/common/http';
import { settings } from '@app/settings/app.settings';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getArticleById(id: string): Observable<Article> {
    return this.http.get<Article>(`${settings.endpoint}json/article/${id}`).pipe(map(res => res[0]));
  }

  getArticlesBySectionId(id: string): Observable<Article[]> {
    return this.http.get<Article[]>(`${settings.endpoint}json/seccion/${id}`);
  }

  getArticlesByAuthorId(id: string): Observable<Article[]> {
    return this.http.get<Article[]>(`${settings.endpoint}json/article/author/${id}`);
  }

  getArticlesByNodequeueName(name: string): Observable<Article[]> {
    return this.http.get<Article[]>(`${settings.endpoint}json/nodequeue/${name}`);
  }

  getJournalistById(id: string): Observable<Journalist> {
    return this.http.get<Journalist>(`${settings.endpoint}json/journalist/${id}`).pipe(map(res => res[0]));
  }

  getTagsByVocabularyId(id: string): Observable<Tag[]> {
    return this.http.get<Tag[]>(`${settings.endpoint}json/vocabulary/${id}`);
  }

  getJournalists(): Observable<Journalist[]> {
    return this.http.get<Journalist[]>(`${settings.endpoint}json/journalists`);
  }
}
