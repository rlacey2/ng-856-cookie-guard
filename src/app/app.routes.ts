import { Routes } from '@angular/router';
import { cookieConsentGuard } from './guards/cookie.guard';

// 20261105: Alpha and Beta both require the user to make a cookie-consent choice.
export const routes: Routes = [
  {
    // 20261106: This route is intentionally public so the consent UI can be shown after reset.
    path: 'consent',
    loadComponent: () => import('./pages/consent/consent').then(module => module.Consent)
  },
  {
    path: 'alpha',
    loadComponent: () => import('./pages/alpha/alpha').then(module => module.Alpha),
    canActivate: [cookieConsentGuard]
  },
  {
    path: 'beta',
    loadComponent: () => import('./pages/beta/beta').then(module => module.Beta),
    canActivate: [cookieConsentGuard]
  },
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./pages/home/home').then(module => module.Home)
  },
  {
    path: '**',
    redirectTo: ''
  }
];