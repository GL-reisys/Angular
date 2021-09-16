import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(
    private http : HttpClient,
    private router : Router
  ) { }

  createPost(postInformation:Object){
    return this.http.post('http://localhost:3000/api/v1/pets', postInformation)
  }

  getAvailablePets(userId:string){
    return this.http.get('http://localhost:3000/api/v1/pets/'+userId)
  }
}

