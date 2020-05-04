import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Journalist } from '@app/shared/models/journalist.model';
import { DataService } from '@app/shared/services/data.service';

@Component({
  selector: 'ojo-journalist-card',
  templateUrl: './journalist-card.component.html'
})
export class JournalistCardComponent implements OnInit {
  @Input() id: string;
  journalist$: Observable<Journalist>;

  constructor(private articleService: DataService) { }

  ngOnInit() {
    this.journalist$ = this.articleService.getJournalistById(this.id);
  }

}
