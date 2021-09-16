import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PetService } from '../pet.service';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
petForm : FormGroup;
newPetPost : any;
  constructor(
    private userService:UserserviceService,
    private formBuilder:FormBuilder,
    private petService:PetService,
    private router: Router
  ) { }

  ngOnInit(): void {
      this.petForm = this.formBuilder.group({
        petName : '',
        listingType : '',
        description: '',
        pictureUrl: '',
        postUser: ''
      });

      if(!this.userService.loggedInUser){
        this.router.navigate(['/login'])
      }
  }

  submitPetPost() : void {
    this.newPetPost = this.petForm.getRawValue();
    this.newPetPost.pictureUrl = "https://via.placeholder.com/150.png?text="+this.newPetPost.petName;
    this.newPetPost.postUser = this.userService.loggedInUser._id
    this.petService.createPost(this.newPetPost).subscribe(() => {
      this.router.navigate(['/home'])
    });;
  }

}
