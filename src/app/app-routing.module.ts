import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SectionComponent } from './content/section/section.component';
import { LandingComponent } from './content/landing/landing.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'section/:id', component: SectionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
