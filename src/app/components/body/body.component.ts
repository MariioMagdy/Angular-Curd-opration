import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor(private _user:UserService) { }
  isEdit

  ngOnInit(): void {
  }
  userObj={
    username:"",
    email:"",
    id:""
  }

  userId = Date.now()
addUser(info){
  console.log(info.value);
  let user = info.value
  user.id = this.userId


this._user.createUser(info.value).subscribe((res)=>{
  console.log("user added");
  this.userId++

  this._user.informChild()
  info.form.reset()
})


}
recevieUser(user){
  console.log(user);
  this.userObj= Object.assign({},user)
  this.isEdit=true
}

updateUser(info){
  this._user.updateUser(this.userObj).subscribe(res=>{
    console.log();
    this._user.informChild()
    this.isEdit=false
    info.form.reset()
  })
  console.log(info.value);


}
}
