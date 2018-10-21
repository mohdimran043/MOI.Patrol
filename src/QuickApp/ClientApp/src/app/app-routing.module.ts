// ====================================================

// Email: support@ebenmonney.com
// ====================================================

import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
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
import {MapComponent} from './components/maps/map.component'
import {MainComponent} from './components/maps/main/main.component';
import {LayoutComponent} from './components/maps/layout/layout.component';
import { EmployeesComponent } from './components/dispatcher/employees/employees.component';
import { HandheldinventoryComponent } from './components/maintainence/inventory/handheldinventory/handheldinventory.component';
import { AccessoryinventoryComponent } from './components/maintainence/inventory/accessoryinventory/accessoryinventory.component';

const routes: Routes = [
  { path: "", component: HomeComponent, canActivate: [AuthGuard], data: { title: "Home" } },
  { path: "login", component: LoginComponent, data: { title: "Login" } }, 
  { path: "settings", component: SettingsComponent, canActivate: [AuthGuard], data: { title: "Settings" } },
  { path: "patrolcars", component: PatrolcarsComponent, data: { title: "" } },
  { path: "patrolcarsinventory", component: PatrolCarsinventoryComponent, data: { title: "" } },
  { path: "handhelds", component: HandheldsComponent, data: { title: "" } },
  { path: "handheldsinventory", component: HandheldinventoryComponent, data: { title: "" } },
  { path: "accessories", component: AccessoriesComponent, data: { title: "" } },
  { path: "accessoriesinventory", component: AccessoryinventoryComponent, data: { title: "" } },
  { path: "dispatcher", component: DispatchComponent, data: { title: "" } },
  { path: "persons", component: EmployeesComponent, data: { title: "" } },
  { path: "map", component: LayoutComponent, data: { title: "" } },
  { path: "home", redirectTo: "/", pathMatch: "full" },
  { path: "**", component: NotFoundComponent, data: { title: "Page Not Found" } }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthService, AuthGuard],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
]
})
export class AppRoutingModule { }
