import { Component, input } from '@angular/core';
import { MediaLayoutImage } from '../media-layout';

@Component({
  selector: 'app-medialayout',
  imports: [],
  templateUrl: './medialayout.html',
  styleUrl: './medialayout.css'
})
export class MediaLayout {
  //this listens for inputs of type MediaLayoutImage
  mediaLayout = input.required<MediaLayoutImage>();
}
