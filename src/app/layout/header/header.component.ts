import { Component, OnInit } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeAr from '@angular/common/locales/es-AR';

@Component({
  selector: 'ojo-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  today: number;

  constructor() { }

  ngOnInit() {
    registerLocaleData(localeAr, 'es-AR');
    this.today = Date.now();
  }

}
