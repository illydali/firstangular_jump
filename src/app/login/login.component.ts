import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

// Decorator : selector, templateurl, styleurl
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

// oninit is an interface
// initialization > ngOnInit(): lifecycle hook -- grabs the component and use 
// upon initialization

export class LoginComponent implements OnInit {

  loginForm : FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      loginId: ["teddy"],
      password: ["pass"],
    })
    
  }

  onSubmit() {
    console.log("logging........");
    console.log(this.loginForm.value);

    const loginId : string = this.loginForm.controls["loginId"].value;
    const password: string = this.loginForm.controls["password"].value;

    if(loginId == "teddy" && password == "pass") {
      // this.loginForm.controls["loginId"].setValue("");
      // this.loginForm.controls["password"].setValue("");
      sessionStorage.setItem("loggedIn", "yes")
      this.router.navigate(['employees-boot'])
    } else {
      this.loginForm.controls["loginId"].setValue("");
      this.loginForm.controls["password"].setValue("");
      this.router.navigate(['login'])
    }
  }
}
