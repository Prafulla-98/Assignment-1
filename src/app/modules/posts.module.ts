import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from "../components/posts/post/post.component";
import { PostsComponent } from '../components/posts/posts/posts.component';
import { RouterModule } from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';
import { PaginationComponent } from "../components/pagination/pagination.component";


@NgModule({
  declarations: [
    PostComponent,
    PostsComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
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
})
export class PostsModule { }