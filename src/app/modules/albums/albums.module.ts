import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlbumsComponent } from '../albums/components/albums/albums.component';
import { AlbumComponent } from '../albums/components/photo/album.component';
import { AlbumResolver } from '../albums/resolver/album.resolver';
import { AlbumService } from '../albums/services/albums.service';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatTreeModule } from '@angular/material/tree';
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
    MatTreeModule,
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
  exports:[
    AlbumsComponent
  ],
  providers: [AlbumResolver, AlbumService],
})
export class AlbumsModule { }