import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm} from '@angular/forms';
import { LoginService} from '../../login.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(public service: LoginService, public router: Router) { 
    
  }

  ngOnInit(): void {
    
  }
  loginForm = new FormGroup({
    username : new FormControl(),
    password: new FormControl()
  })
  CheckUser(f: NgForm){
    
    var res=this.service.ValidateUser(this.loginForm.value["username"], this.loginForm.value["password"]);
    if(res){
      localStorage.setItem("username",this.loginForm.value["username"]);
      localStorage.setItem("password",this.loginForm.value["password"]);
      if(localStorage.getItem("username")==localStorage.getItem("password"))
      this.router.navigate(["home"]);
      
      else{
      alert("Username and password does not match");
      localStorage.clear();
      
      }
    }
    else{
      alert("Invalid User");
    }
    f.reset();
  }

}

 
