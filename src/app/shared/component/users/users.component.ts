import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../service/users.service';
import { Iuser } from '../../models/users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
 usersInfo! :Array<Iuser>
  constructor(
    private _routes:Router,
    private _userService:UsersService
  ) { }

  ngOnInit(): void {
    this.usersInfo = this._userService.fetchAllusers()
  }

  // gotoProduct(){
  //   this._routes.navigate(['products'])
  // }

  }


