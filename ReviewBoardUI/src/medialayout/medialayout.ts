import { Component, input } from '@angular/core';
import { IMediaLayout } from '../media-layout';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-medialayout',
  imports: [RouterModule],
  templateUrl: './medialayout.html',
  styleUrl: './medialayout.css'
})
export class MediaLayout {
  //this listens for inputs of type MediaLayoutImage
  mediaInput = input.required<IMediaLayout>();
}
