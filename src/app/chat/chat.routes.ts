import { Routes } from "@angular/router";
import {
  ChatPage, ChatStreamPage, ConsultPage,
  DiagnosePage, ExplainPage, SymptomsPage
} from "./pages";
import { AppLayout } from "@shared/layouts/app-layout/app-layout";

const chatRoutes: Routes = [
  {
    path: '',
    component: AppLayout,
    children: [
      {
        path: '',
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
        redirectTo: ''
      }
    ]
  },
];

export default chatRoutes;
