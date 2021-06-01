import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from './modules/home/services/messages/message.service';
import { LoginService } from './modules/login/service/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  message: string[];
  title = 'assignment';
  noMessage="No messages";
  
  constructor(private messageService: MessageService,public login: LoginService, private router: Router){

  }
  
ngOnInit(): void{
  this.messageService.receiveMessage().subscribe((d)=>{
    this.message = d;
  })
}

  LogoutUser(){
    localStorage.clear();
    this.router.navigate([""]);
    this.login.isLoggedIn=false;
  }

  clearMessage(): void{
    this.messageService.clearMessage();
  }
}
  
