import { Component, OnInit, NgModule } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-createform',
  templateUrl: './createform.component.html',
  styleUrls: ['./createform.component.css']
})
@NgModule({
  imports: [FormsModule]
})
export class CreateformComponent implements OnInit {
  formdata: any;
  success_message: any = '';
  error_message: any = '';
  constructor(
    private _httpService: HttpService,
    private _router: Router
  ) { }
  ngOnInit() {
    this.formdata = {
      name: '',
      cuisine: ''
    }
  }
  submit_form(){
    let observable = this._httpService.create(this.formdata);
    observable.subscribe((data) => {
      var array = [];
      if (data['errors']){
        console.log("Error displayed!")
        var hold = data['errors'];
        console.log(hold);
        for (const key in hold){
          array.push(hold[key])
        }
        console.log(array)
        this.success_message = array;
      } else {
        this._router.navigate(['/'])
      }
    },
    (error) => {
      console.log("err", error);
      this.error_message = error;
    })
  }
}
