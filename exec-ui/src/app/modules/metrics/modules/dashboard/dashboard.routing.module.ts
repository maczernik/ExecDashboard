import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from '../../../../auth/guards/auth-guard';

const routes: Routes = [
  {
    path: 'portfolio/:portfolio-name/:portfolio-lob',
    component: DashboardComponent,
    data: { animation: 'metric-metrics' }
  },
  {
    path: 'portfolio/:portfolio-name/:portfolio-lob/product/:product-id',
    component: DashboardComponent,
    data: { animation: 'product' }
  },
  {
    path: '',
    redirectTo: 'portfolio/:portfolio-name/:portfolio-lob',
    pathMatch: 'full',
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})

export class DashboardRoutingModule { }
