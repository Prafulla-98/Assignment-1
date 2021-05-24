import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from '../model/Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts$: Observable<Post[]>;
  posts: Post[];
  totalLength: number;
  page: number = 1;
  activePage:number = 0;
  isLoading: boolean = false;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.posts$ = this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
    this.isLoading=true;
    this.posts$.subscribe(p => {
      this.posts = p as Post[];
      this.totalLength=this.posts.length;
      this.isLoading=false;
    });
  }

  getLink(value: string): void {
    const id = parseInt(value) - 1;
    this.router.navigate(['posts/'+value], {state: {data: this.posts[id]}});
  }

  displayActivePage(activePageNumber:number){  
    this.activePage = activePageNumber  
  } 
}