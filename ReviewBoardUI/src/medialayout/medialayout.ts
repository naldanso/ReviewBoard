import { Component, Input } from '@angular/core';
import { MediaLayoutImage } from '../media-layout';

@Component({
  selector: 'app-medialayout',
  imports: [],
  templateUrl: './medialayout.html',
  styleUrl: './medialayout.css'
})
export class Medialayout {
  @Input() mediaLayout!:MediaLayoutImage;
}
