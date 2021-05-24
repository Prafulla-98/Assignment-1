import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {HomeComponent} from './components/home/home.component';
import {CanactivateGuard} from './canactivate.guard';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { NewuserComponent } from './components/newuser/newuser.component';
import { AlbumsModule } from './modules/albums.module';
import { PostsModule } from './modules/posts.module';
import { AuthguardService } from './authguard.service';

const routes: Routes = [
  {path:"", component: LoginComponent},
  {path:"login", component: LoginComponent},
  
  {path:"home", component: HomeComponent, canActivate: [CanactivateGuard]},
  
  {path:"editUser", component: EditUserComponent, canActivate: [CanactivateGuard]},
  {path: 'newUser',component: NewuserComponent, canActivate: [CanactivateGuard]},
  {path: 'posts',canLoad:[AuthguardService], loadChildren: () => import('./modules/posts.module').then(m => m.PostsModule), canActivate: [CanactivateGuard]},
  {path:"albums",canLoad:[AuthguardService], loadChildren: () => import('./modules/albums.module').then(m => m.AlbumsModule), canActivate: [CanactivateGuard]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AlbumsModule, PostsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
