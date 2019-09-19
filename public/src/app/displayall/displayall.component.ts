import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-displayall',
  templateUrl: './displayall.component.html',
  styleUrls: ['./displayall.component.css']
})
export class DisplayallComponent implements OnInit {
  all_main: any = [];
  edit_selected: Boolean = false;
  selected: any;
  d: any;
  seconds: any;
  parent = this;
  constructor(private _httpService: HttpService) {}
  ngOnInit() {
    let observable = this._httpService.find_all();
    observable.subscribe((data)=>{
      this.all_main = data;
      this.d = new Date();
      this.edit_selected = false;
    })
  }
  clickDelete(id){
    let observable = this._httpService.delete(id);
    observable.subscribe((data)=>{
      console.log(data, "deleted!")
    });
    let observable2 = this._httpService.find_all();
    observable2.subscribe((data)=>{
      this.all_main = data;
    })
  }
  editselected(id){
    let observable = this._httpService.find_one(id._id);
    observable.subscribe((data)=>{
      this.edit_selected = true;
      this.selected = data;
    })
    let observable2 = this._httpService.find_all();
    observable2.subscribe((data)=>{
    })
  }
}
