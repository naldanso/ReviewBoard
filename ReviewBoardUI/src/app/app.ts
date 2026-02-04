import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Home} from '../home/home';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

//this (signal() command is being called within app.html to show "Hello, signal()")
export class App {
  protected readonly title = signal('Welcome to the Review Board');
}
