import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public user:any;
  constructor(
    private userService:UserserviceService,
    private router:Router
  ) { 
    
  }

  ngOnInit(): void {
    if(this.userService.loggedInUser === null || this.userService.loggedInUser === undefined){
      this.router.navigate(['/login']);
    }else{
      this.user = this.userService.loggedInUser
    }
  }

}
