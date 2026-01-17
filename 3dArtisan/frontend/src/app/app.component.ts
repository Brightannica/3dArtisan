import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // <-- import RouterOutlet

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet], // <-- add it here
  template: `
    <nav>
      <a routerLink="">Home</a> |
      <a routerLink="upload">Upload Art</a>
    </nav>
    <hr />
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
