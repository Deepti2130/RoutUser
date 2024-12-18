import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { UsersComponent } from './shared/component/users/users.component';
import { ProductsComponent } from './shared/component/products/products.component';
import { FairsComponent } from './shared/component/fairs/fairs.component';
import { HomeComponent } from './shared/component/home/home.component';
import { AppRoutingmodule } from './app.routing.module';
import { UserComponent } from './shared/component/users/user/user.component';
import { UserformComponent } from './shared/component/users/userform/userform.component';
import { PagenotfoundComponent } from './shared/component/pagenotfound/pagenotfound.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UsersComponent,
    ProductsComponent,
    FairsComponent,
    HomeComponent,
    UserComponent,
    UserformComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingmodule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
