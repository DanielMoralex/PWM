import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ColegioComponent } from './components/colegio/colegio.component';

@Component({
  selector: 'app-root',
  imports: [ColegioComponent],
  template: '<app-colegio></app-colegio>',
  standalone: true,
})
export class AppComponent {
  title = 'sprint3';
}
