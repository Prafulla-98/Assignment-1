import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
//import { SidenavService } from 'src/app/sidenav.service';
import { Album } from '../model/album';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums$: Observable<Album[]>;
  albums: Album[];
  totalLength: number;
  page: number = 1;
 isLoading: boolean = false;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    //this.sidenav.open();
    this.albums$ = this.http.get<Album[]>('https://jsonplaceholder.typicode.com/albums/');
    this.isLoading=true;
    this.albums$.subscribe(a => {
      this.albums = a as Album[];
      this.totalLength=this.albums.length;
    });
    this.isLoading=false;
    
  }

  getLink(value: string): void {
    const id = parseInt(value) - 1;
    this.router.navigate(['albums/'+value]);
  }
  
}