import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './auth/components/login/login.component';
import { AuthGuard } from './auth/guards/auth-guard';

export const routes: Routes = [
  {
    path: 'directory',
    loadChildren: './modules/directory/directory.module#DirectoryModule',
    canActivateChild: [AuthGuard]
  },
  {
    path: 'portfolio/:portfolio-name/:portfolio-lob',
    loadChildren: './modules/metrics/modules/dashboard/dashboard.module#DashboardModule',
    canActivateChild: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { animation: undefined }
  },
  {
    path: '',
    redirectTo: 'directory',
    pathMatch: 'full',
    canActivateChild: [AuthGuard]
  }
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true, enableTracing: false });
