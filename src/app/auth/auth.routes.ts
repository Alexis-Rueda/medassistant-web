import { Routes } from "@angular/router";
import { AuthLayout } from "@shared/layouts/auth-layout/auth-layout";
import LoginPage from "./login-page/login-page";

const authRoutes: Routes = [
  {
    path: '',
    component: AuthLayout,
    children: [
      {
        path: 'login',
        component: LoginPage
      },
      {
        path: '**',
        redirectTo: 'login'
      }
    ]
  },
];

export default authRoutes;
