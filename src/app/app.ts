import { Component, signal } from '@angular/core';
import { HelloComponent } from './hello/hello';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HelloComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('hello-angular');
}
