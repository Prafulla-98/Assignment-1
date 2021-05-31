import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/modules/albums/models/photo';
import { PhotosService } from '../../services/photos.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
photos: Photo[];
  constructor(public service: PhotosService) { }

  ngOnInit(): void {
    this.getAllPhotos();
  }

  getAllPhotos(){
    let resp=this.service.getPhotos();
    resp.subscribe(p =>{
      this.photos=p as Photo[];
    })
  }

}
