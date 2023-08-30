import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { authGuard } from './core/guards/auth.guard';
import { RegistrationComponent } from './pages/registration/registration.component';
import { MachinesComponent } from './pages/machines/machines.component';

const routes: Routes = [
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
  {
    path: 'maquinas/formulario',
    loadComponent: () => import('./pages/machines/components/form/form.component'),
    title: 'Formulario de Maquinas',
    canActivate: [authGuard],
  },
  {
    path: 'maquinas/:id/formulario',
    loadComponent: () => import('./pages/machines/components/form/form.component'),
    title: 'Formulario de Maquinas',
    canActivate: [authGuard],
  },
  {
    path: 'maquinas/:id',
    loadComponent: () => import('./pages/machines/detail/detail.component'),
    title: 'Formulario de Maquinas',
    canActivate: [authGuard],
  },
  {
    path: 'usuarios/formulario/:id',
    loadComponent: () => import('./pages/users/user-form/user-form.component'),
    title: 'Editar usuario',
    canActivate: [authGuard],
  },
  {
    path: 'usuarios/formulario',
    loadComponent: () => import('./pages/users/user-form/user-form.component'),
    title: 'Nuevo usuario',
    canActivate: [authGuard],
  },
  {
    path: 'usuarios',
    loadComponent: () => import('./pages/users/users.component'),
    title: 'Usuarios',
    canActivate: [authGuard],
  },
  {
    path: 'ajustes',
    loadComponent: () => import('./pages/config/config.component'),
    title: 'Configuración',
  },
  {
    path: '**',
    redirectTo: 'inicio',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
