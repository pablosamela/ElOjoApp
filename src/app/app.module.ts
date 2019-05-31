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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    SectionComponent,
    LandingComponent,
    ArticleComponent
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


// https://medium.com/@motcowley/angular-folder-structure-d1809be95542
// https://github.com/ngx-rocket/starter-kit/blob/master/tsconfig.json
// https://itnext.io/building-an-enterprise-grade-angular-project-structure-f5be32533ba3