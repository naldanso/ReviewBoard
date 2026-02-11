import { Component, inject } from '@angular/core';
import { IMediaLayout } from '../media-layout';
import { Mediaservice } from '../app/mediaservice';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterModule } from '@angular/router';
import { MediaLayout } from '../app/media-layout/media-layout';

@Component({
  selector: 'app-home',
  imports: [ MatGridListModule, RouterModule, MediaLayout],
  templateUrl: './home.html',
  styleUrl: './home.css'
})

export class Home {
  readonly imageUrl = 'img';

  //the base array that contains all images loaded
  mediaArr: IMediaLayout[] = [];
  //the array that the user will see, whether they filtered on nothing or some ID
  filteredMediaArr: IMediaLayout[] = [];
  //the service that we read our images from
  mediaService: Mediaservice = inject(Mediaservice);
  //user-input media ID.
  mediaId: string;

  //logs the value from the search form.
  setId(idNumber: string){
    this.mediaId = idNumber;
    console.log(`${this.mediaId} has been set.`);
  }

  //this is where we initially set up the data/class members
  constructor() {
    this.mediaId = "";
  }
}
