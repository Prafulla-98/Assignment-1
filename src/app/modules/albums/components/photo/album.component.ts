import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { SidenavService } from 'src/app/sidenav.service';
import { Photo } from '../../models/photo';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  
  photos: Photo[];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.activatedRoute.data.subscribe((data: { photos: Photo[] }) => {
      this.photos = data.photos;
    });
  }

}