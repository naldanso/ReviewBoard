import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mediaservice } from '../mediaservice';
import { IMediaLayout } from '../../media-layout';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.css'
})
export class Details {
  route: ActivatedRoute = inject(ActivatedRoute);
  mediaService = inject(Mediaservice);
  mediaImage: IMediaLayout | undefined;

  //we'll add functionality here for viewing and posting comments, as well as rating, sharing

  constructor(){
    const mediaId = Number(this.route.snapshot.params['id']);
    this.mediaImage = this.mediaService.getMediaById(mediaId);
  }
}
