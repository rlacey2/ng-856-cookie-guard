import { Component, inject } from '@angular/core';
import { CookieService } from '../../core/services/cookie.service';

// 20261105: Beta demonstrates that the same root consent state is shared across routes.
@Component({
  selector: 'app-beta',
  standalone: true,
  templateUrl: './beta.html',
  styleUrl: './beta.scss'
})
export class Beta {
  readonly cookieService = inject(CookieService);
}