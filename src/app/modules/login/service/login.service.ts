import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
isLoggedIn: boolean;
  constructor() { }
  ValidateUser(username,password){
   return true;
   this.isLoggedIn=true;
}
}