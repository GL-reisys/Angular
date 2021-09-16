import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserserviceService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: '',
      password: ''
    })
    if(this.userService.isAuthenticated())
    console.log(`Logged in user is ${this.userService.loggedInUser.username}`);
  }

  login(): void {
    this.userService.loginUser(this.loginForm.getRawValue());
  }

}
