import { Injectable } from '@angular/core';
import { Iuser } from '../models/users';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarService } from './snack-bar.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
 userArr:Array<Iuser> = [
  {
    username:"Deepti Jadhav",
    userid:"1",
    userrole:"candidate"
  },
  {
    username:"Sneha Tipradhi",
    userid:"2",
    userrole:"candidate"
  },
  {
    username:"Shubhi Bharate",
    userid:"3",
    userrole:"Admin"
  }
 ]
  constructor(
    private _router:Router,
    private _snackBar:SnackBarService
  ) { }


  fetchAllusers(){
  //API call to fetch all users
  return this.userArr
  }



  fetchuser(id:string):Iuser{
    //API call to get user info
   return this.userArr.find(user=>user.userid === id)!
  }

  Addpostuser(user:Iuser){
    //API call to add new user
    this.userArr.push(user);
    this._router.navigate(['/users'])
    this._snackBar.opensnackBar(`The new user ${user.username} added successfully!!!`)
  }

  updateduser(updateduser:Iuser){
  //API call to update user

  let getIndex = this.userArr.findIndex(user => user.userid === updateduser.userid)

  this.userArr[getIndex] = updateduser
  this._router.navigate(['/users'])
  this._snackBar.opensnackBar(`The user ${updateduser.username} updated successfully!!!`)
  }


  removeuser(id:string){
    //API call to remove user
    let getIndex = this.userArr.findIndex(user => user.userid === id)

    this.userArr.splice(getIndex,1)
    this._router.navigate(['/users'])
  this._snackBar.opensnackBar(`The user is removed successfully!!!`)
  }
}
