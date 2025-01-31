import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectoryComponent } from './components/directory/directory.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../auth/guards/auth-guard';

const routes: Routes = [
  {
    path: '', component: DirectoryComponent,
    canActivate: [AuthGuard],
    data: { animation: 'directory' }
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
export class DirectoryRoutingModule { }
