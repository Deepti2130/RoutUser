import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private _router :Router
  ) { }

  ngOnInit(): void {
  }

  ongetProduct(){
    //function to get ID of product
    console.log('Got Product ID')

    //redirect/nevigate to products comp
    //for redirect must to inject a router instance

    this._router.navigate(['products'])  //by default uses absolute path

  }

}
