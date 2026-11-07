import { Routes } from '@angular/router';
import { canActivateAuthRole } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes')
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.routes'),
    canActivate: [canActivateAuthRole],
    data: {
      role: ['PATIENT', 'ADMIN']
    }
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
