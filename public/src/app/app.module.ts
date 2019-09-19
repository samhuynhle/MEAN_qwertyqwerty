import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DisplayallComponent } from './displayall/displayall.component';
import { DisplayoneComponent } from './displayone/displayone.component';
import { CreateformComponent } from './createform/createform.component';
import { EditformComponent } from './editform/editform.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { CreatereviewComponent } from './createreview/createreview.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DisplayallComponent,
    DisplayoneComponent,
    CreateformComponent,
    EditformComponent,
    ReviewsComponent,
    CreatereviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
