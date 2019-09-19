import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import components
import { HomeComponent } from './home/home.component';
import { DisplayallComponent } from './displayall/displayall.component';
import { DisplayoneComponent } from './displayone/displayone.component';
import { CreateformComponent } from './createform/createform.component';
import { EditformComponent } from './editform/editform.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { CreatereviewComponent } from './createreview/createreview.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/restaurants' },
  { path: 'restaurants/new', component: CreateformComponent },
  { path: 'restaurants', component: DisplayallComponent },
  { path: 'restaurants/:id', component: ReviewsComponent },
  { path: 'restaurants/displayall', component: DisplayallComponent },
  { path: 'restaurants/displayone/:id', component: DisplayoneComponent },
  { path: 'restaurants/:id/edit', component: EditformComponent },
  { path: 'restaurants/:id/review', component: CreatereviewComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
