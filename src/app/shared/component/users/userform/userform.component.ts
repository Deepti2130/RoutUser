import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Iuser } from 'src/app/shared/models/users';
import { UsersService } from 'src/app/shared/service/users.service';
import { UuidService } from 'src/app/shared/service/uuid.service';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.scss']
})
export class UserformComponent implements OnInit {
  userid!: string;
  userinfo!: Iuser
  //for reactive form we create the form control in ts and then it is sync in html
  //we need property to store the form
  userForm!: FormGroup

  //for update and edit functionality
  IsinEditmode : boolean = false
  constructor(
    private _routes: ActivatedRoute,
    private _userservice: UsersService,
    private _uuidservice:UuidService
  ) { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      username: new FormControl(null,[Validators.required]),
      // userrole: new FormControl('candidate')
      userrole: new FormControl(null,[Validators.required])
    })
    this.userid = this._routes.snapshot.params['userid']


    if(this.userid){
      this.IsinEditmode = true
       this.userinfo = this._userservice.fetchuser(this.userid)
      //  console.log(this.userinfo)
       this.userForm.patchValue(this.userinfo)
    }



  }

  onAdduser() {
    if(this.userForm.valid){
      console.log(this.userForm.value);

      let userobj:Iuser ={
        ...this.userForm.value,
        userid:this._uuidservice.generateUuid()
      }
      this.userForm.reset()
      console.log(userobj)
      this._userservice.Addpostuser(userobj)


    }


    }

    onupdateuser(){

      let updatedobj:Iuser = {...this.userForm.value, userid:this.userid}
      console.log(updatedobj)
      this.userForm.reset()

      this._userservice.updateduser(updatedobj)
  }

}
