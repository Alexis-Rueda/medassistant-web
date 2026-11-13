import { ClassifyPage } from './pages/classify-page/classify-page';
import { Routes } from "@angular/router";
import { AppLayout } from "@shared/layouts/app-layout/app-layout";
import { ConditionPage, ConditionsPage, SymptomsPage } from "./pages";

const analysisRoutes: Routes = [
  {
    path: '',
    component: AppLayout,
    children: [
      {
        path: 'condition',
        component: ConditionPage
      },
      {
        path: 'conditions',
        component: ConditionsPage
      },
      {
        path: 'symptoms',
        component: SymptomsPage
      },
      {
        path: 'classify',
        component: ClassifyPage
      },
      {
        path: '**',
        redirectTo: 'login'
      }
    ]
  },
];

export default analysisRoutes;
