import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient) { }
  userAdded= new Subject();

  createUser(obj):Observable<any>{
    console.log(obj);
    return this._http.post("http://localhost:3000/users",obj)
  }
  updateUser(user){
    return this._http.put("http://localhost:3000/users/" + user.id,user)
  }
  getLatestUser(){
    return this._http.get("http://localhost:3000/users")
  }
  deleteUser(user){
    return this._http.delete("http://localhost:3000/users/" + user.id)
  }
  informChild(){
    this.userAdded.next()
  }
}
