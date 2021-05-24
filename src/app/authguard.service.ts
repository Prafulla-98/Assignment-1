import { Injectable } from '@angular/core';
import {  CanLoad, Router, Route } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanLoad {

  constructor(private router: Router) { }

  canLoad(route: Route): boolean {
    
    //determine whether you want to load the module
    //return true or false
    
    return false; 
  }
}
