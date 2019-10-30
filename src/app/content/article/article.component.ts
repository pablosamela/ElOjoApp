import { Component, OnInit } from '@angular/core';
import { Article } from '@app/shared/models/article.model';
import { ActivatedRoute } from '@angular/router';
import { take, filter, mergeMap, map, flatMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ArticleService } from '@app/shared/services/article.service';
import { Journalist } from '@app/shared/models/journalist.model';
@Component({
  selector: 'ojo-article',
  templateUrl: './article.component.html'
})
export class ArticleComponent implements OnInit {

  article$: Observable<Article>;

  constructor(private route: ActivatedRoute, private articleService: ArticleService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.article$ = this.articleService.getArticleById(id);
  }
}
