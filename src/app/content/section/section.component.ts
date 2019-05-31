import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '@app/shared/services/http.service';
import { Article } from '@app/shared/models/article.model';

@Component({
  selector: 'ojo-section',
  templateUrl: './section.component.html'
})
export class SectionComponent implements OnInit {
  private sectionSubscription: any;
  articles: Article[];

  constructor(private route: ActivatedRoute,
              private http: HttpService) { }

  ngOnInit() {
    this.sectionSubscription = this.route.params.subscribe(
      (response) => {
        this.http.get(`json/seccion/${response.id}`).subscribe(httpResponse => {
          this.articles = httpResponse;
        });
      }
    );
  }


  ngOnDestroy(){
    this.sectionSubscription.unsubscribe();
  }

}
