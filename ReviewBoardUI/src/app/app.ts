import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
//this (signal() command is being called somewhere to show "Hello, signal()")
export class App {
  protected readonly title = signal('Welcome to the Review Board');
}
