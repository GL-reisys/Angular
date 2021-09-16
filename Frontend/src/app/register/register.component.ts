//import { HttpClient } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserserviceService
    ) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      username: '',
      password: ''
    });
  }

  registerSubmit(): void{
    this.userService.registerUser(this.userForm.getRawValue());
  }

}
