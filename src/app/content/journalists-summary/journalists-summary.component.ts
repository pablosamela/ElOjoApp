import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Journalist } from '@app/shared/models/journalist.model';
import { DataService } from '@app/shared/services/data.service';

@Component({
  selector: 'ojo-journalists',
  templateUrl: './journalists-summary.component.html'
})
export class JournalistsSummaryComponent implements OnInit {
  journalists$: Observable<Journalist[]>;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.journalists$ = this.dataService.getJournalists();
  }

}
