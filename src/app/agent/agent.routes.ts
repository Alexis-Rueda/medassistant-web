import { Routes } from "@angular/router";
import { AppLayout } from "@shared/layouts/app-layout/app-layout";
import {
  OpenPage, AppointmentPage,
  OrchestratorPage, RoutingPage
} from "./pages";

const agentRoutes: Routes = [
  {
    path: '',
    component: AppLayout,
    children: [
      {
        path: 'open',
        component: OpenPage
      },
      {
        path: 'appointment',
        component: AppointmentPage
      },
      {
        path: 'orchestrator',
        component: OrchestratorPage
      },
      {
        path: 'routing',
        component: RoutingPage
      },
      {
        path: '**',
        redirectTo: 'open'
      }
    ]
  },
];

export default agentRoutes;
