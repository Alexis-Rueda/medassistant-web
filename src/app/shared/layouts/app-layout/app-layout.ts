import { Component, inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import Keycloak from 'keycloak-js';
import { CommonModule } from '@angular/common';
import { NavItems } from '@shared/components/nav-items/nav-items';

@Component({
  selector: 'app-app-layout',
  imports: [
    RouterOutlet,
    CommonModule,
    RouterModule,
    NavItems
],
  templateUrl: './app-layout.html',
})
export class AppLayout {

  private readonly keycloak = inject(Keycloak);

  logout() {
    this.keycloak.logout({
      redirectUri: window.location.origin + '/auth/login'
    });
  }
}
