
import { Component, OnInit, Output} from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { User } from './models/User';
import { UsersService } from 'src/app/users.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Output() public edit = new EventEmitter();
  ELEMENT_DATA : User[];
  displayedColumns: string[] = ['Id','Name','Username','Email','Street','Suite','City','Zipcode','Latitude','Longitude','Phone','Website','Company Name', 'Catch Phrase','BS','Edit'];
  dataSource;

  constructor( public router: Router, private service: UsersService) { 
    
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<User>(this.ELEMENT_DATA);
    this.getAllUsers();
    
  }
  
 public getAllUsers(){
  let resp = this.service.getUsers();
    resp.subscribe(users=>this.dataSource.data=users as User[]);
}

  LogoutUser(){
    localStorage.clear();
    this.router.navigate([""]);

  }

  addUser(value1)
  {
    //this.isEditMode=false;
    this.router.navigateByUrl('/editUser', { state: { userData: value1 } });

  }

  editData(value) {
    this.edit.emit(this.ELEMENT_DATA);
    this.router.navigateByUrl('/editUser', { state: { userData: value } });
  }
}
