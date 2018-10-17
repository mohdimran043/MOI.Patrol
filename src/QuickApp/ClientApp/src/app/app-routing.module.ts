// ====================================================

// Email: support@ebenmonney.com
// ====================================================

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from "./components/login/login.component";
import { HomeComponent } from "./components/home/home.component";
import { SettingsComponent } from "./components/settings/settings.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { PatrolcarsComponent } from './components/maintainence/patrolcars/patrolcars.component';
import { PatrolCarsinventoryComponent } from './components/maintainence/inventory/patrolcarsinventory/patrolcarsinventory.component';
import { HandheldsComponent } from './components/maintainence/handhelds/handhelds.component';
import {AccessoriesComponent} from './components/maintainence/accessories/accessories.component';
import { DispatchComponent } from './components/dispatcher/dispatch/dispatch.component';

const routes: Routes = [
  { path: "", component: HomeComponent, canActivate: [AuthGuard], data: { title: "Home" } },
  { path: "login", component: LoginComponent, data: { title: "Login" } }, 
  { path: "settings", component: SettingsComponent, canActivate: [AuthGuard], data: { title: "Settings" } },
  { path: "patrolcars", component: PatrolcarsComponent, data: { title: "" } },
  { path: "patrolcarsinventory", component: PatrolCarsinventoryComponent, data: { title: "" } },
  { path: "handhelds", component: HandheldsComponent, data: { title: "" } },
  { path: "accessories", component: AccessoriesComponent, data: { title: "" } },
  { path: "dispatcher", component: DispatchComponent, data: { title: "" } },
  { path: "home", redirectTo: "/", pathMatch: "full" },
  { path: "**", component: NotFoundComponent, data: { title: "Page Not Found" } }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthService, AuthGuard]
})
export class AppRoutingModule { }
