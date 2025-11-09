import { Component, inject } from '@angular/core';
import { MediaLayout } from '../medialayout/medialayout';
import { IMediaLayout } from '../media-layout';
import { Mediaservice } from '../app/mediaservice';

@Component({
  selector: 'app-home',
  imports: [ MediaLayout],
  templateUrl: './home.html',
  styleUrl: './home.css'
})

export class Home {
  readonly imageUrl = 'img';

  mediaArr: IMediaLayout[] = [];
  filteredMediaArr: IMediaLayout[] = [];
  mediaService: Mediaservice = inject(Mediaservice);

  filterResults(idNumber: string){
    if(!idNumber){
      this.filteredMediaArr = this.mediaArr;
      return;
    }

    this.filteredMediaArr = this.mediaArr.filter((mediaUnit) => mediaUnit.id === parseInt(idNumber));
  }
  constructor() {

    this.mediaArr = this.mediaService.getAllMedia();
    this.filteredMediaArr = this.mediaArr;
  }
}
