import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from '../models/photo';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http: HttpClient) { }

  findAlbumById(id: string) {
    //return this.http.get<Photo[]>('https://jsonplaceholder.typicode.com/albums/'+id+'/photos').subscribe(console.log);
    return this.http.get<Photo[]>('https://jsonplaceholder.typicode.com/albums/'+id+'/photos');
  } 
}