import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { authGuard } from './core/guards/auth.guard';
import { RegistrationComponent } from './pages/registration/registration.component';
import { MachinesComponent } from './pages/machines/machines.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/auth/auth.component'),
    title: 'Login',
  },
  {
    path: 'inicio',
    component: HomeComponent,
    title: 'Inicio',
    canActivate: [authGuard],
  },
  {
    path: 'registro',
    component: RegistrationComponent,
    title: 'Nuevo registro',
    canActivate: [authGuard],
  },
  {
    path: 'maquinas',
    component: MachinesComponent,
    title: 'Maquinas',
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
