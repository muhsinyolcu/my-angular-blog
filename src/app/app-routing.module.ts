import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoutesConfig } from './configs/routes.config';

import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routeNames = RoutesConfig.routesNames;

const routes: Routes = [
  { path: routeNames.home, component: HomePageComponent, pathMatch: 'full' },
  { path: routeNames.error404, component: Error404PageComponent },

  { path: 'en', redirectTo: '' }, // because english language is the default one

  // otherwise redirect to 404
  { path: '**', redirectTo: RoutesConfig.routes.error404 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
