import { Component, OnInit, NgModule, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-editform',
  templateUrl: './editform.component.html',
  styleUrls: ['./editform.component.css']
})
@NgModule({
  imports: [FormsModule]
})
export class EditformComponent implements OnInit {
  @Input() datatoshow;
  @Input() edit_selected;
  @Input() parent;
  // current: any;
  showdata: any = [];
  id: any;
  success_message: any = '';
  error_message: any = '';
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }
  ngOnInit() {
    // this._route.params.subscribe((params: Params)=>{
    //   this.id = params['id']
    //   this.current = this.find_current(this.id)
    // });
    this.showdata = this.datatoshow
    this.id = this.datatoshow._id
  }
  // find_current(id){
  //   let observable = this._httpService.find_one(id)
  //   observable.subscribe((data)=>{
  //     this.current = data;
  //     this.formdata = this.current;
  //   })
  // }
  submit_form(){
    console.log("you've clicked submit")
    console.log(this.edit_selected)
    let observable = this._httpService.update(this.datatoshow._id, this.datatoshow);
    observable.subscribe((data)=>{
      let observable2 = this._httpService.find_all();
      observable2.subscribe(data => {})
      console.log(data)
      var array = [];
      if (data['errors']){
        var hold = data['errors'];
        for (const key in hold){
          array.push(hold[key])
        }
        this.success_message = array;
        this._router.navigate(['/']);
      } else {
        console.log("good")
        let observable = this._httpService.find_all();
        observable.subscribe(data => {
          this._router.navigate(['/']);
          this.parent['edit_selected'] = false;
        })
      }
    })
  }
  cancel(){
    this.parent['edit_selected'] = false;
    this._router.navigate(['/']);
  }
}