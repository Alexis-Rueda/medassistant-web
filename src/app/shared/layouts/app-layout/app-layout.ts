import { Component, inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import Keycloak from 'keycloak-js';
import { CommonModule } from '@angular/common';
import agentRoutes from '../../../agent/agent.routes';
import chatRoutes from '../../../chat/chat.routes';

@Component({
  selector: 'app-app-layout',
  imports: [
    RouterOutlet,
    CommonModule,
    RouterModule
  ],
  templateUrl: './app-layout.html',
})
export class AppLayout {

  private readonly keycloak = inject(Keycloak);
  agentRoutes = agentRoutes[0].children?.filter((route) => route.path !== '**');
  chatRoutes = chatRoutes[0].children?.filter((route) => route.path !== '**');

  logout() {
    this.keycloak.logout({
      redirectUri: window.location.origin + '/auth/login'
    });
  }
}
