import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
//import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  loginForm: FormGroup;
  user: any;
  @Output() isEditMode: boolean = true;
  addUser: any;
  options: string[] = ['Ahmedabad', 'Mumbai', 'Banglore', 'Pune', 'Kolkata', 'Hyderabad', 'Delhi', 'Chennai'];
  filteredOptions: Observable<string[]>;

  constructor(private fb:FormBuilder, private router: Router) {
    const user = this.router.getCurrentNavigation().extras.state.userData;
    const add=this.router.getCurrentNavigation().extras.state.addUser;
    this.user = user;
    this.addUser=add;
   }

  ngOnInit(): void {
    
    
    if(this.isEditMode){
      
      this.loginForm = this.fb.group({
        id: [this.user.id, Validators.required],
        name: [this.user.name, Validators.required],
        username: [this.user.username, Validators.required],
        email: [this.user.email, [Validators.required, Validators.email]],
        street: [this.user.address.street, Validators.required],
        suite: this.user.address.suite,
        city: [this.user.address.city,Validators.required],
        zipcode: [this.user.address.zipcode, Validators.required],
        lat: this.user.address.geo.lat,
        lng: this.user.address.geo.lng,
        phone: [this.user.phone,Validators.required],
        website: this.user.website,
        companyName: [this.user.company.name, Validators.required],
        catchPhrase: this.user.company.catchPhrase,
        bs: this.user.company.bs,
      });
    }
    
     else{
      
      this.loginForm = this.fb.group({
        
        id: ['',Validators.required],
        name: ['',Validators.required],
        username:['',Validators.required],
        email: ['',[Validators.required, Validators.email]],
        phone: ['',Validators.required],
        street:['',Validators.required],
        suite:'',
        city: ['',Validators.required],
        zipcode: ['',Validators.required],
        lat: '',
        lng: '',
        website: '',
        companyName: ['',Validators.required],
        catchPhrase: '',
        bs: '',   
      });
    }
  }

  saveUser() {
  window.alert(this.loginForm.get('id').value + '\n'
    + this.loginForm.get('name').value + '\n'
    + this.loginForm.get('username').value + '\n'
    + this.loginForm.get('email').value + '\n'
    + this.loginForm.get('street').value + '\n'
    + this.loginForm.get('suite').value + '\n'
    + this.loginForm.get('city').value + '\n'
    + this.loginForm.get('zipcode').value + '\n'
    + this.loginForm.get('lat').value + '\n'
    + this.loginForm.get('lng').value + '\n'
    + this.loginForm.get('phone').value + '\n'
    + this.loginForm.get('website').value + '\n'
    + this.loginForm.get('companyName').value + '\n'
    + this.loginForm.get('catchPhrase').value + '\n'
    + this.loginForm.get('bs').value + '\n');
    this.router.navigate(["home"]);
    
  }
 

}