import { Component, inject } from '@angular/core';
import { MediaLayout } from '../medialayout/medialayout';
import { IMediaLayout } from '../media-layout';
import { Mediaservice } from '../app/mediaservice';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-home',
  imports: [ MediaLayout, MatGridListModule],
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

  //expects an ID of type string. this is called when we use the search bar
  filterResults(idNumber: string){
    //if nothing is typed into search bar, reset filtered images to show entire array
    if(!idNumber){
      this.filteredMediaArr = this.mediaArr;
      return;
    }

    //otherwise, show only the image you searched for
    this.filteredMediaArr = this.mediaArr.filter((mediaUnit) => mediaUnit.id === parseInt(idNumber));
  }

  //this is where we initially set up the data/class members
  constructor() {

    //populate mediaArr with data from MediaService class
    this.mediaArr = this.mediaService.getAllMedia();

    //set the filtered array to that same mediaArr
    this.filteredMediaArr = this.mediaArr;
  }
}
