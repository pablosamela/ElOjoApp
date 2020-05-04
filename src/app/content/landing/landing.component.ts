import { Component, OnInit } from '@angular/core';
import { Article } from '@app/shared/models/article.model';
import { Observable } from 'rxjs';
import { DataService } from '@app/shared/services/data.service';

@Component({
  selector: 'ojo-landing',
  templateUrl: './landing.component.html'
})
export class LandingComponent implements OnInit {
  principal$: Observable<Article[]>;
  secondary$: Observable<Article[]>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.principal$ = this.dataService.getArticlesByNodequeueName('principal');
    this.secondary$ = this.dataService.getArticlesByNodequeueName('secondary');
  }

}
