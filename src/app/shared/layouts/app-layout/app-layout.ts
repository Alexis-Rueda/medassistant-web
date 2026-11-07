import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import Keycloak from 'keycloak-js';

@Component({
  selector: 'app-app-layout',
  imports: [RouterOutlet],
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
