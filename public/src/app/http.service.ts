import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  find_all(){
    return this._http.get('/qwerty');
  }
  find_one(id){
    return this._http.get(`/qwerty/${id}`);
  }
  find_all_dependents(id){
    return this._http.get(`/qwerty/${id}/all`);
  }
  create(formdata){
    return this._http.post('/qwerty/', formdata);
  }
  update(id, formdata){
    return this._http.put(`/qwerty/${id}`, formdata);
  }
  new_review(id, formdata){
    return this._http.put(`/qwerty/${id}/review`, formdata)
  }
  delete(id){
    return this._http.delete(`/qwerty/${id}`);
  }
  constructor(private _http: HttpClient) { }
}
