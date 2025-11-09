import { Component, inject } from '@angular/core';
import { Searchbar } from '../searchbar/searchbar';
import { MediaLayout } from '../medialayout/medialayout';
import { IMediaLayout } from '../media-layout';
import { Mediaservice } from '../app/mediaservice';

@Component({
  selector: 'app-home',
  imports: [Searchbar, MediaLayout],
  templateUrl: './home.html',
  styleUrl: './home.css'
})

export class Home {
  readonly imageUrl = 'img';

  mediaArr: IMediaLayout[] = [];
  mediaService: Mediaservice = inject(Mediaservice);

  constructor() {

    this.mediaArr = this.mediaService.getAllMedia();

  }
}
