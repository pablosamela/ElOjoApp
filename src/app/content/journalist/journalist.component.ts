import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Journalist } from '@app/shared/models/journalist.model';
import { DataService } from '@app/shared/services/data.service';
import { map } from 'rxjs/operators';
import { Article } from '@app/shared/models/article.model';

@Component({
  selector: 'ojo-journalist',
  templateUrl: './journalist.component.html'
})
export class JournalistComponent implements OnInit {
  journalist$: Observable<Journalist>;
  articles$: Observable<Article[]>;

  constructor(private route: ActivatedRoute, private articleService: DataService) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      map((params: ParamMap) => {
        const id = params.get('id');
        this.journalist$ = this.articleService.getJournalistById(id);
        this.articles$ = this.articleService.getArticlesByAuthorId(id);
      }
    )).subscribe();
  }
}
