import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private _user:UserService) { }
  @Output() sendtoParent = new EventEmitter()

  allusers:any=[]

  ngOnInit(): void {
    this._user.userAdded.subscribe(res=>{
      console.log("user added from parent");
      this.getlatestUsers()
    })
    this.getlatestUsers()
  }

  getlatestUsers(){
    this._user.getLatestUser().subscribe(res=>{
      console.log(res);
      this.allusers=res
    })
  }

  editUser(user){
    console.log(user);
    this.sendtoParent.emit(user)


  }
  deleteUser(user){
 this._user.deleteUser(user).subscribe(res=>{
  this.getlatestUsers()
 })

  }

}
