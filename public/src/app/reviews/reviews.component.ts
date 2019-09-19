import { Component, OnInit, NgModule, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  current: any;
  id: any;
  all_reviews: any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }
  ngOnInit() {
    this._route.params.subscribe((params: Params)=>{
      this.id = params['id']
      this.current = this.find_current(this.id)
      this.display_all_reviews(this.id)
    });
  }
  find_current(id){
    let observable = this._httpService.find_one(id)
    observable.subscribe((data)=>{
      this.current = data;
    })
  }
  display_all_reviews(id){
    let observable = this._httpService.find_all_dependents(id)
    observable.subscribe((data)=>{
      this.all_reviews = data;
    })
  }
}
