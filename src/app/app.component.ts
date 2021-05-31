import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './modules/login/service/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'assignment';
  
  constructor(public login: LoginService, private router: Router){

  }
  


  LogoutUser(){
    localStorage.clear();
    this.router.navigate([""]);
    this.login.isLoggedIn=false;
  }
}
  
