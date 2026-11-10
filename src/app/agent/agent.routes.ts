import { Routes } from "@angular/router";
import { AppointmentPage } from "./pages/appointment-page/appointment-page";
import { OpenPage } from "./pages/open-page/open-page";
import { OrchestratorPage } from "./pages/orchestrator-page/orchestrator-page";
import { RoutingPage } from "./pages/routing-page/routing-page";
import { AppLayout } from "@shared/layouts/app-layout/app-layout";

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
