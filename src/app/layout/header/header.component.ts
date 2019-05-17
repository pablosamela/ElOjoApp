import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ojo-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  today: number;

  constructor() { }

  ngOnInit() {
    this.today = Date.now();
  }

}
