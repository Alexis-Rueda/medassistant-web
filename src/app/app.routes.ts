import { Routes } from '@angular/router';
import { canActivateAuthRole } from './shared/guards/auth.guard';

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
    path: 'chat',
    loadChildren: () => import('./chat/chat.routes'),
    canActivate: [canActivateAuthRole],
    data: {
      role: ['PATIENT', 'ADMIN']
    }
  },
  {
    path: 'agent',
    loadChildren: () => import('./agent/agent.routes'),
    canActivate: [canActivateAuthRole],
    data: {
      role: ['PATIENT', 'ADMIN']
    }
  },
  {
    path: 'analysis',
    loadChildren: () => import('./analysis/analysis.routes'),
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
