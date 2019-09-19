import { Component, OnInit, NgModule } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-createreview',
  templateUrl: './createreview.component.html',
  styleUrls: ['./createreview.component.css']
})
@NgModule({
  imports: [FormsModule]
})
export class CreatereviewComponent implements OnInit {
  formdata: any;
  success_message: any = [];
  error_message: any = '';
  id: any;
  current: any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.formdata = {
      name: '',
      number: 0,
      description: ''
    }
    this._route.params.subscribe((params: Params)=>{
      this.id = params['id']
    })
    this.find_current(this.id);
  }
  submit_form(){
    let observable = this._httpService.new_review(this.id, this.formdata);
    observable.subscribe((data) => {
      var array = [];
      if (data['errors']){
        console.log("Error displayed!")
        var hold = data['errors']['dependents']['errors'];
        for (const key in hold){
          array.push(hold[key])
        }
        console.log(array)
        this.success_message = array;
      } else {
        this._router.navigate([`/restaurants/${this.id}`])
      }
    },
    (error) => {
      console.log("err", error);
      this.success_message = error;
    })
  }
  find_current(id){
    let observable = this._httpService.find_one(id)
    observable.subscribe((data)=>{
      this.current = data;
    })
  }
}
