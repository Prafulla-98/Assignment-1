import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { User } from '../home/User';

@Component({
  selector: '[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user: User;
  @Output() public edit = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  editData() {
    this.edit.emit(this.user);
  }

}
