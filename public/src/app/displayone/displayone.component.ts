import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-displayone',
  templateUrl: './displayone.component.html',
  styleUrls: ['./displayone.component.css']
})
export class DisplayoneComponent implements OnInit {
  current: any;
  id: any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }
  ngOnInit() {
    this._route.params.subscribe((params: Params)=>{
      this.id = params['id']
      this.current = this.find_current(this.id)
    });
  }
  find_current(id){
    let observable = this._httpService.find_one(id)
    observable.subscribe((data)=>{
      this.current = data;
    })
  }
}
