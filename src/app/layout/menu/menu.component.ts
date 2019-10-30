import { Component, OnInit } from '@angular/core';
import { HttpService } from '@app/shared/services/http.service';


@Component({
  selector: 'ojo-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
  items: any;
  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.get('json/json/vocabulary/1').subscribe(
      response => {
        if (response && response.sections) {
          this.items = response.sections;
        }
      }
    );

  }

}
