import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Article } from '@app/shared/models/article.model';
import { DataService } from '@app/shared/services/data.service';

@Component({
  selector: 'ojo-article',
  templateUrl: './article.component.html'
})
export class ArticleComponent implements OnInit {

  article$: Observable<Article>;

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.article$ = this.dataService.getArticleById(id);
  }
}
