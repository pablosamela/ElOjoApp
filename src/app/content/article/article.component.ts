import { Component, OnInit } from '@angular/core';
import { Article } from '@app/shared/models/article.model';
import { HttpService } from '@app/shared/services/http.service';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
@Component({
  selector: 'ojo-article',
  templateUrl: './article.component.html'
})
export class ArticleComponent implements OnInit {

  articles: Article[] = [];

  constructor(private route: ActivatedRoute, private http: HttpService) { }

  ngOnInit() {
    this.route.params.pipe(
      take(1)
    ).subscribe(
      (response: any) => {
        this.http.get(`json/node/${response.id}`).subscribe(
          (httpResponse: Article[]) => {
            this.articles = httpResponse;
          });
      }
    );
  }
}
