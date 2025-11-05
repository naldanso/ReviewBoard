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
  mediaLayoutList:MediaLayoutImage[] = [];
}
