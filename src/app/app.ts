import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CookieGuardComponent } from './components/cookie-guard/cookie-guard';

// 20261105: The app shell owns navigation and the persistent consent dialog.
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CookieGuardComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}