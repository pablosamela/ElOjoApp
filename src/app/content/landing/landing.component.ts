import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { HttpService } from '@app/shared/services/http.service';
import { Article } from '@app/shared/models/article.model';

@Component({
  selector: 'ojo-landing',
  templateUrl: './landing.component.html'
})
export class LandingComponent implements OnInit {
  principal: Article[];
  secondary: Article[];

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.principal = [];
    this.secondary = [];

    this.http.get('json/nodequeue/principal').subscribe(
      (httpResponse: Article[]) => {
        this.principal = httpResponse;
      }
    );

    this.http.get('json/nodequeue/secondary').subscribe(
      (httpResponse: Article[]) => {
        this.secondary = httpResponse;
      }
    );
  }

}
