import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Journalist } from '@app/shared/models/journalist.model';
import { ArticleService } from '@app/shared/services/article.service';

@Component({
  selector: 'ojo-journalist',
  templateUrl: './journalist.component.html'
})
export class JournalistComponent implements OnInit {
  @Input() id: number;
  journalist$: Observable<Journalist>;

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.journalist$ = this.articleService.getJournalistById(this.id);
  }

}
