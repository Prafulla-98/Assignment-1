import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from './modules/home/services/messages/message.service';
import { LoginService } from './modules/login/service/login.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  messages: any[] = [];
  subscription: Subscription;
  title = 'assignment';
  
  
  constructor(private messageService: MessageService,public login: LoginService, private router: Router){

  }
  
ngOnInit(): void{
  this.subscription=this.messageService.receiveMessage().subscribe((message)=>{
    if(message){
      this.messages.push(message);
    }
    else{
      this.messages=[];
    }
  });  
}

ngOnDestroy(){
  this.subscription.unsubscribe();
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
  
