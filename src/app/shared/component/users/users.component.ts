import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../service/users.service';
import { Iuser } from '../../models/users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
 usersInfo! :Array<Iuser>

 selectedId!:string
  constructor(
    private _router:Router,
    private _userService:UsersService,
    private _routes:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.usersInfo = this._userService.fetchAllusers()

    //when we open the users comp then by default see the first data then it is need to nevigate
    this.selectedId = this.usersInfo[0].userid
    this._router.navigate([this.usersInfo[0].userid],{
      relativeTo:this._routes
    })  }

  onuserselect(user:Iuser){
   this.selectedId = user.userid
  }

    }


