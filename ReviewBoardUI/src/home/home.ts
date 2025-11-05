import { Component } from '@angular/core';
import { Searchbar } from '../searchbar/searchbar';
import { Medialayout } from '../medialayout/medialayout';

@Component({
  selector: 'app-home',
  imports: [Searchbar, Medialayout],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
