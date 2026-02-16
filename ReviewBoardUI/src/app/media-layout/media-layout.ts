import { Component, computed, inject, input } from '@angular/core';
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
  readonly filteredID = input.required<string>();

  //variables to hold forms of an array of media fetched from the backend. for now,
  //the backend is a service object called Mediaservice.
  mediaService: Mediaservice = inject(Mediaservice);
  readonly mediaArr: IMediaLayout[] = this.mediaService.getAllMedia();

  //filter images shown based on what the user enters in the home page search bar.
  filterResults = computed( () => {
    if(!this.filteredID()){
      return this.mediaArr;
    }
    return this.mediaArr.filter( (unit) => unit.id === parseInt(this.filteredID()) );
  } );

}
