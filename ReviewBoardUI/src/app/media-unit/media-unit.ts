import { Component, input } from '@angular/core';
import { IMediaLayout } from '../../media-layout';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-media-unit',
  imports: [RouterModule],
  templateUrl: './media-unit.html',
  styleUrl: './media-unit.css',
})
export class MediaUnit {
  //this listens for inputs of type MediaLayoutImage
  mediaInput = input.required<IMediaLayout>();
}
