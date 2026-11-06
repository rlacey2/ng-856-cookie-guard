import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from '../../core/services/cookie.service';

// 20261105: Alpha demonstrates reading consent and resetting it to reopen the modal.
@Component({
  selector: 'app-alpha',
  standalone: true,
  templateUrl: './alpha.html',
  styleUrl: './alpha.scss'
})
export class Alpha {
  readonly cookieService = inject(CookieService);
  private readonly router = inject(Router);

  // 20261106: Leave the protected page immediately; the root consent dialog is shown on /consent.
  resetConsent(): void {
    this.cookieService.resetConsent('/alpha');
    void this.router.navigateByUrl('/consent');
  }
}