import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { PostsModule } from './modules/posts/posts.module';
import { AlbumsModule } from './modules/albums/albums.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { MatSortModule } from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';
import { DialogBoxComponent } from './modules/home/components/dialog-box/dialog-box.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatPaginatorModule} from '@angular/material/paginator';

import { AppComponent } from './app.component';
import { LoginComponent } from '../app/modules/login/component/login-page/login.component';
import { HomeComponent } from './modules/home/components/users/home.component';
import { GeocolorDirective } from '../app/modules/home/services/geocolor/geocolor.directive';
import { EditUserComponent } from './modules/home/components/edit-user/edit-user.component';

import { AuthguardService } from './authguard.service';
import { TodoModule } from './modules/todo/todo.module';
@NgModule({

  declarations: [
    
    AppComponent,
    LoginComponent,
    HomeComponent,    
    GeocolorDirective,
    EditUserComponent,
    DialogBoxComponent ,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    PostsModule,
    AlbumsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatCardModule,
    MatSortModule,
    MatIconModule,
    MatDialogModule,
    MatTabsModule,
    MatSidenavModule,
    MatPaginatorModule,
    TodoModule
  ],
  exports:[
    MatSortModule
  ],
  providers: [AuthguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
