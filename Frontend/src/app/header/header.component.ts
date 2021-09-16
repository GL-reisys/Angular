import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
loggedInUser:any;
  constructor(
    private userService : UserserviceService,
    private router : Router
    ) { }

  ngOnInit(): void {
    this.loggedInUser = this.userService.loggedInUser;
  }

  logoutUser():void{
    this.userService.logoutUser();
    this.router.navigate(['/login']);
  }

  isAuthenticated():boolean{
    return this.userService.isAuthenticated();
  }
}
