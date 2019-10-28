import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SectionComponent } from './content/section/section.component';
import { LandingComponent } from './content/landing/landing.component';
import { ArticleComponent } from './content/article/article.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'section/:id', component: SectionComponent },
  { path: 'article/:id', component: ArticleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
