import { Component, inject, input } from '@angular/core';
import { IMediaLayout } from '../../media-layout';
import { Mediaservice } from '../mediaservice';
import { MatGridListModule } from '@angular/material/grid-list';
import { MediaUnit } from '../media-unit/media-unit';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-media-layout',
  imports: [MediaUnit, MatGridListModule, RouterModule],
  templateUrl: './media-layout.html',
  styleUrl: './media-layout.css',
})
export class MediaLayout {
  readonly imageUrl = 'img';

  //this is the Id of a post that someone enters in the search bar
  photoId = input.required<string>();

  //variables to hold forms of an array of media fetched from the backend. for now,
  //the backend is a service object called Mediaservice.
  mediaArr: IMediaLayout[] = [];
  filteredMediaArr: IMediaLayout[] = [];
  mediaService: Mediaservice = inject(Mediaservice);

  //filter images shown based on what the user enters in the home page search bar.
  filterResults(){
    if(!this.photoId()){
      this.filteredMediaArr = this.mediaArr;
      return;
    }

    console.log(this.photoId());
    this.filteredMediaArr = this.mediaArr.filter((mediaUnit) => mediaUnit.id === parseInt(this.photoId()));
  }

  constructor(){
    this.mediaArr = this.mediaService.getAllMedia();
    this.filteredMediaArr = this.mediaArr;
  }
}
