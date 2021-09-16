import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

private response: any;
public loggedInUser:any;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  registerUser(userInfo:Object):void{
    this.http.post('http://localhost:3000/api/v1/users', userInfo)
      .subscribe(() => this.router.navigate(['/login']));
  }

  loginUser(loginInfo:Object):void{
    this.http.post('http://localhost:3000/api/v1/users/authenticate', loginInfo)
      .subscribe(res => {
        this.response = res;
        this.loggedInUser = this.response.data.user;
        if(this.loggedInUser){
          this.router.navigate(['/home'])
        }
      });
  }

  isAuthenticated():boolean{
    return !!this.loggedInUser;
  }

  logoutUser():void{
    this.loggedInUser = null;
  }

}
