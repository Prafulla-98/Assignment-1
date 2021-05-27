import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedIn=false;
  constructor() { }
  
  ValidateUser(username,password){
    this.isLoggedIn=true;
   return true;
   
  }

  
}