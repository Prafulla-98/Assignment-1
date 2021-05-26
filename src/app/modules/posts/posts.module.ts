import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from "./components/post/post.component";
import { PostsComponent } from './components/posts/posts.component';
import { RouterModule } from '@angular/router';
//import { NavigationComponent } from '../components/navigation/navigation.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { PaginationComponent } from "../Pagination/components/pagination/pagination.component";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    PostComponent,
    PostsComponent,
    PaginationComponent,
    //NavigationComponent,
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatButtonModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatTabsModule,
    RouterModule.forRoot([
      {
        path: 'posts',
        component: PostsComponent,
      },
      {
        path: 'posts/:id',
        component: PostComponent,
      }
    ])
  ],
  exports: [
    PostsComponent
  ]
})
export class PostsModule { }