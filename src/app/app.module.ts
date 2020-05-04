import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MenuComponent } from './layout/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { SectionComponent } from './content/section/section.component';
import { LandingComponent } from './content/landing/landing.component';
import { ArticleComponent } from './content/article/article.component';
import { JournalistComponent } from './content/journalist/journalist.component';
import { JournalistsSummaryComponent } from './content/journalists-summary/journalists-summary.component';
import { JournalistCardComponent } from './content/article/journalist-card/journalist-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    SectionComponent,
    LandingComponent,
    ArticleComponent,
    JournalistComponent,
    JournalistCardComponent,
    JournalistsSummaryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
