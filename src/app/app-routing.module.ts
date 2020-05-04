import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SectionComponent } from './content/section/section.component';
import { LandingComponent } from './content/landing/landing.component';
import { ArticleComponent } from './content/article/article.component';
import { JournalistsSummaryComponent } from './content/journalists-summary/journalists-summary.component';
import { JournalistComponent } from './content/journalist/journalist.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'section/:id', component: SectionComponent },
  { path: 'article/:id', component: ArticleComponent },
  { path: 'journalist/:id', component: JournalistComponent },
  { path: 'journalists', component: JournalistsSummaryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
