import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface  ParentNavItem {
  label: string;
  route: string;
  icon?: string;
  children?: NavItem[];
}

interface NavItem {
  label: string;
  route: string;
  icon?: string;
}

@Component({
  selector: 'app-nav-items',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-items.html',
})
export class NavItems {

  navItems: ParentNavItem[] = [
    {
      label: 'Home',
      route: '/home',
      children: [
        { label: 'Home', route: '/home' }
      ]
    },
    {
      label: 'Chat',
      route: '/chat/page',
      children: [
        { label: 'Chat Page', route: '/chat/page' },
        { label: 'Chat Stream', route: '/chat/stream' },
        { label: 'Consult', route: '/chat/consult' },
        { label: 'Diagnose', route: '/chat/diagnose' },
        { label: 'Explain', route: '/chat/explain' },
        { label: 'Symptoms', route: '/chat/symptoms' }
      ]
    },
    {
      label: 'Agent',
      route: '/agent',
      children: [
        { label: 'Open Agent', route: '/agent/open' },
        { label: 'Appointment', route: '/agent/appointment' },
        { label: 'Orchestrator', route: '/agent/orchestrator' },
        { label: 'Routing', route: '/agent/routing' }
      ]
    }
  ];



}
