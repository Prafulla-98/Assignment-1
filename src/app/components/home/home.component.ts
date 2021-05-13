import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from './User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users$: Observable<User[]>;
  constructor(private http: HttpClient, public router: Router) { }

  ngOnInit(): void {
    this.users$ = this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }
  LogoutUser(){
    localStorage.clear();
    this.router.navigate([""]);

  }
  edit(value) {
    
    this.router.navigateByUrl('/editUser', { state: { userData: value } });
  }
}
