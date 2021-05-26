import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from '../app/modules/login/component/login-page/login.component';
import {HomeComponent} from './modules/home/components/users/home.component';
import {CanactivateGuard} from './canactivate.guard';
import { EditUserComponent } from './modules/home/components/edit-user/edit-user.component';
import { AlbumsModule } from './modules/albums/albums.module';
import { PostsModule } from './modules/posts/posts.module';

const routes: Routes = [
  // { path: '', redirectTo: 'login'},
  // {
  //   path: 'login', component: LoginComponent,
  //   children: [
  //     {path: '', component: LoginComponent}
  //   ]
  // },
  // { path: 'home', component: HomeComponent,
  //   children: [
  //     { path: '', redirectTo: 'home'},
  //     {path:"editUser", component: EditUserComponent},
  // {path: 'newUser',component: NewuserComponent},
  // {path: 'posts', loadChildren: () => import('./modules/posts.module').then(m => m.PostsModule)},
  // {path:"albums", loadChildren: () => import('./modules/albums.module').then(m => m.AlbumsModule)}
  //   ]
  // }
  {path:"", component: LoginComponent},
  {path:"home", component: HomeComponent, canActivate: [CanactivateGuard]},
  {path:"editUser", component: EditUserComponent, canActivate: [CanactivateGuard]},
  {path: 'posts', loadChildren: () => import('./modules/posts/posts.module').then(m => m.PostsModule), canActivate: [CanactivateGuard]},
  {path:"albums", loadChildren: () => import('./modules/albums/albums.module').then(m => m.AlbumsModule), canActivate: [CanactivateGuard]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AlbumsModule, PostsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
