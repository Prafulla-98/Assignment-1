import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlbumsComponent } from '../components/albums/albums/albums.component';
import { AlbumComponent } from '../components/albums/photo/album.component';
import { AlbumResolver } from '../components/albums/resolver/album.resolver';
import { AlbumService } from '../components/albums/service/albums.service';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [
    AlbumsComponent,
    AlbumComponent,
    
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatButtonModule,
    MatPaginatorModule,
    RouterModule.forRoot([
      {
        path: 'albums',
        component: AlbumsComponent,
      },
      {
        path: 'albums/:id',
        component: AlbumComponent,
        resolve: {
          photos: AlbumResolver,
        }
      }
    ])
  ],
  providers: [AlbumResolver, AlbumService],
})
export class AlbumsModule { }