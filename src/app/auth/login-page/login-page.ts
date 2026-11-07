import { Component, effect, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { KEYCLOAK_EVENT_SIGNAL, KeycloakEventType, typeEventArgs, ReadyArgs } from 'keycloak-angular';
import Keycloak from 'keycloak-js';

@Component({
  selector: 'app-login-page',
  imports: [],
  templateUrl: './login-page.html',
})
export default class LoginPage {
  authenticated = signal(false);
  private readonly keycloak = inject(Keycloak);
  private readonly router = inject(Router);
  private readonly keycloakSignal = inject(KEYCLOAK_EVENT_SIGNAL);

  constructor() {
    effect(() => {
      const keycloakEvent = this.keycloakSignal();

      if (keycloakEvent.type === KeycloakEventType.Ready) {
        this.authenticated.set(typeEventArgs<ReadyArgs>(keycloakEvent.args));
      }

      if (keycloakEvent.type === KeycloakEventType.AuthLogout) {
        this.authenticated.set(false);
      }
    });
  }

  login() {
    this.keycloak.login({ prompt: 'login' });
  }

  continueToApp() {
    this.router.navigate(['/home']);
  }

  switchAccount() {
    this.keycloak.logout({
      redirectUri: window.location.origin + '/auth/login'
    });
  }
}
