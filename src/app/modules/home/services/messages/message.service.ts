import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private subject = new Subject<string[]>();
   
  constructor() { }

  sendMessage(messages: string[]){
    this.subject.next(messages)
  }

  receiveMessage(): Observable<string[]>{
    return this.subject.asObservable(); 
  }

  clearMessage() {
    this.subject.next();
}

}
