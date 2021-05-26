import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { User } from '../app/components/home/models/User';
// import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  public getUsers(){
     return this.http.get("https://jsonplaceholder.typicode.com/users");
  }
}
