import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ListEmpComponent } from './list-emp/list-emp.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListEmpComponent,
    AddEmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/* explanations */

/* Decorators(@ngmodule) Add Metadata */
// @NgModule({
//   // what belongs to the module 
//   declarations: [ ],
//   // external modules used by this module
//   imports: [ ],
//   providers: [ ],
//   bootstrap: [ ],
// })

// /* typescript class
// // exported to be used outside the file */
// if do not export..cannot be used outside this class
// export class TestModule {

// }


/*
// 1. write a typescript class name LoginModule
@NgModule({
  declarations: [ --components that belong to this module --> LoginPopup, VideoComponent],
  imports: [ --other component to be used here --> eg LoginLibrary],
  providers: [ --services --> jsonserver],
  boostrap: [ main component to be loaded initaially --> LoginPopup], 
})
export class LoginModule {

}

// 2. create empty array named declarations as key:value pairs
//  add more - imports, providers, bootstrap
declarations: []
imports: []
providers: []
boostrap: [] 

// 3. take arrays and put inside an object 
{
  declarations: [],
  imports: [],
  providers: [],
  boostrap: [], 
}

// 4. put them all in a decorator (decorator provides metadata) 
@NgModule({
  declarations: [],
  imports: [],
  providers: [],
  boostrap: [], 
})
*/