import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {HomeComponent} from './components/home/home.component';
import {CanactivateGuard} from './canactivate.guard';
import { EditUserComponent } from './components/edit-user/edit-user.component';

const routes: Routes = [
  {path:"", component: LoginComponent},
  {path:"home", component: HomeComponent, canActivate: [CanactivateGuard]},
  {path:"login", component: LoginComponent},
  {path:"editUser", component: EditUserComponent, canActivate: [CanactivateGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
