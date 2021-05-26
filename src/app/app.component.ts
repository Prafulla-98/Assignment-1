import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import { LoginModule } from './components/login/login.module';
import { LoginService } from '../app/modules/login/service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'assignment';
  login: boolean = true;
  constructor(private loggedin: LoginService, private router: Router){
    //this.login=true;
  }
  

  LogoutUser(){
    localStorage.clear();
    this.router.navigate([""]);
    this.loggedin.isLoggedIn=false;
    this.login=false;
  }
}
  
