import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./shared/component/home/home.component";
import { UsersComponent } from "./shared/component/users/users.component";
import { ProductsComponent } from "./shared/component/products/products.component";
import { FairsComponent } from "./shared/component/fairs/fairs.component";
import { UserComponent } from "./shared/component/users/user/user.component";
import { UserformComponent } from "./shared/component/users/userform/userform.component";
import { PagenotfoundComponent } from "./shared/component/pagenotfound/pagenotfound.component";



// <!-- http://localhost:4200/ - home
//  http://localhost:4200/home - home
//  http://localhost:4200/users - users
//  http://localhost:4200/products - prod
//  http://localhost:4200/fairs - fairs -->

//it is need to define routs hence we create the routs
const appRouts:Routes = [
  {
   path:"",
  //  component:HomeComponent
  redirectTo:'home',
  pathMatch:'full'
  },

  {
    path:'home',
    component:HomeComponent
   },

  {
    path:'users',
    component:UsersComponent
   },
   {
    path:'users/addusers',
    component:UserformComponent
   },

   {
    path:'users/:userid',
    component:UserComponent
   },

   {
    path:'users/:userid/edit',
    component:UserformComponent
   },

   {
    path:'products',
    component:ProductsComponent
   },

   {
    path:'fairs',
    component:FairsComponent
   },
   {
    path:'page-not-found',
    component:PagenotfoundComponent
   },
   {
    path:'**',
    redirectTo:'page-not-found'
   }
]

@NgModule({
  imports:[RouterModule.forRoot(appRouts)],
  exports:[RouterModule]
})

export class AppRoutingmodule{

}
