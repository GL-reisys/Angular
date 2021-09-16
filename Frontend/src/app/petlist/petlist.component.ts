import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PetService } from '../pet.service';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-petlist',
  templateUrl: './petlist.component.html',
  styleUrls: ['./petlist.component.css']
})
export class PetlistComponent implements OnInit {
  pets: any[];
  response: any;
  constructor(
    private userService : UserserviceService,
    private petService : PetService,
    private router : Router
  ) { }

  ngOnInit(): void {
    if(!this.userService.loggedInUser){
      this.router.navigate(['/login'])
    }else{
      this.petService.getAvailablePets(this.userService.loggedInUser._id).subscribe(res => {
        this.response = res;
        this.pets = this.response.data.pets;
      });
    }
  }

}
