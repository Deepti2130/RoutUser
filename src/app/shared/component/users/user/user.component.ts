import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, RouterLink } from '@angular/router';
import { Iuser } from 'src/app/shared/models/users';
import { UsersService } from 'src/app/shared/service/users.service';
import { UuidService } from 'src/app/shared/service/uuid.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userid !: string;
  userinfo!: Iuser

  constructor(
    private _routes: ActivatedRoute,
    private _userservice: UsersService,


  ) { }

  ngOnInit(): void {

    this._routes.params
    //we used directly params on activated routes then it is behaves as observable and we need to subscribe
    .subscribe((params:Params)=>{
      console.log(params)
      this.userid = params['userid']

       this.userinfo = this._userservice.fetchuser(this.userid)
    })


    // console.log(this._routes)
    // console.log(this._routes.snapshot.params['userid'])//it is javascript object

    // //now we store the id in userid property
    // this.userid = this._routes.snapshot.params['userid']

    // this.userinfo = this._userservice.fetchuser(this.userid)
  }


  Onremoveuser(){
    this._userservice.removeuser(this.userid)
  }

}

