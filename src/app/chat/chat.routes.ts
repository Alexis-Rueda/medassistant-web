import { Routes } from "@angular/router";
import { AppLayout } from "@shared/layouts/app-layout/app-layout";
import {
  ChatPage, ChatStreamPage, ConsultPage,
  DiagnosePage, ExplainPage, SymptomsPage
} from "./pages";

const chatRoutes: Routes = [
  {
    path: '',
    component: AppLayout,
    children: [
      {
        path: 'page',
        component: ChatPage
      },
      {
        path: 'stream',
        component: ChatStreamPage
      },
      {
        path: 'consult',
        component: ConsultPage
      },
      {
        path: 'diagnose',
        component: DiagnosePage
      },
      {
        path: 'explain',
        component: ExplainPage
      },
      {
        path: 'symptoms',
        component: SymptomsPage
      },
      {
        path: '**',
        redirectTo: 'page'
      }
    ]
  },
];

export default chatRoutes;
