import { Routes } from "@angular/router";
import { AppLayout } from "@shared/layouts/app-layout/app-layout";
import { HomePage } from "./home-page/home-page";

const homeRoutes: Routes = [
  {
    path: '',
    component: AppLayout,
    children: [
      {
        path: '',
        component: HomePage
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  },
];

export default homeRoutes;
