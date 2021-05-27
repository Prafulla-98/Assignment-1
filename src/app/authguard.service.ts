import { Injectable } from '@angular/core';
import {  CanLoad, Router, Route } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanLoad {

  constructor(private router: Router) { }

  canLoad(route: Route): boolean {
    
    if(localStorage.getItem("username")==null && localStorage.getItem("password")==null){
      alert("Please enter valid username and password to login");
      this.router.navigate(["login"]);
      
      return false;
    }else{
      return true;
  }
    }
  }

