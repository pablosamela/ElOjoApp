import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DataService } from '@app/shared/services/data.service';
import { Article } from '@app/shared/models/article.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'ojo-section',
  templateUrl: './section.component.html'
})
export class SectionComponent implements OnInit {
  articles$: Observable<Article[]>;
  title: string;

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      map((params: ParamMap) => {
        const id = params.get('id');
        return this.dataService.getArticlesBySectionId(id);
      })
    ).subscribe(articles => {
      this.title = articles[0]?.section;
    });
  }
}
