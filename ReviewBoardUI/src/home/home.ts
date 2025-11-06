import { Component } from '@angular/core';
import { Searchbar } from '../searchbar/searchbar';
import { MediaLayout } from '../medialayout/medialayout';
import { MediaLayoutImage } from '../media-layout';

@Component({
  selector: 'app-home',
  imports: [Searchbar, MediaLayout],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  readonly imageUrl = 'img';

  //this is called a property. you can also make this an array.
  mediaLayout: MediaLayoutImage = {
    id: 123,
    photo: `${this.imageUrl}/photographer-at-sunset-silhouette.jpg`,
    date: '10/14/2025'
  };

}
