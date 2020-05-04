import { Component, OnInit } from '@angular/core';
import { DataService } from '@app/shared/services/data.service';
import { Tag } from '@app/shared/models/tag.model';
import { Observable } from 'rxjs';


@Component({
  selector: 'ojo-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
  tags$: Observable<Tag[]>;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.tags$ = this.dataService.getTagsByVocabularyId('1');

  }

}
