// ====================================================

// Email: support@ebenmonney.com
// ====================================================

import { NgModule, ErrorHandler } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ToastaModule } from 'ngx-toasta';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { PopoverModule } from "ngx-bootstrap/popover";
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppErrorHandler } from './app-error.handler';
import { AppTitleService } from './services/app-title.service';
import { AppTranslationService, TranslateLanguageLoader } from './services/app-translation.service';
import { ConfigurationService } from './services/configuration.service';
import { AlertService } from './services/alert.service';
import { LocalStoreManager } from './services/local-store-manager.service';
import { EndpointFactory } from './services/endpoint-factory.service';
import { NotificationService } from './services/notification.service';
import { NotificationEndpoint } from './services/notification-endpoint.service';
import { AccountService } from './services/account.service';
import { AccountEndpoint } from './services/account-endpoint.service';
import { ModalService } from './services/modalservice';

import { EqualValidator } from './directives/equal-validator.directive';
import { LastElementDirective } from './directives/last-element.directive';
import { AutofocusDirective } from './directives/autofocus.directive';
import { BootstrapTabDirective } from './directives/bootstrap-tab.directive';
import { BootstrapToggleDirective } from './directives/bootstrap-toggle.directive';
import { BootstrapSelectDirective } from './directives/bootstrap-select.directive';
import { BootstrapDatepickerDirective } from './directives/bootstrap-datepicker.directive';
import { ModalComponentDirective } from './directives/modal.component.directive';
import { GroupByPipe } from './pipes/group-by.pipe';

import { AppComponent } from "./components/app.component";
import { LoginComponent } from "./components/login/login.component";
import { HomeComponent } from "./components/home/home.component";
import { SettingsComponent } from "./components/settings/settings.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { NotificationsViewerComponent } from "./components/controls/notifications-viewer.component";
import { SearchBoxComponent } from "./components/controls/search-box.component";
import { UserInfoComponent } from "./components/controls/user-info.component";
import { UserPreferencesComponent } from "./components/controls/user-preferences.component";
import { UsersManagementComponent } from "./components/controls/users-management.component";
import { RolesManagementComponent } from "./components/controls/roles-management.component";
import { ViewDefinitionComponent } from "./components/controls/view-definition.component";
import { ProgramSettingComponent } from "./components/controls/program-setting.component";
import { RoleEditorComponent } from "./components/controls/role-editor.component";
import { DxTreeViewModule } from "../../node_modules/devextreme-angular";

import { DxMenuModule,DxContextMenuModule,DxSelectBoxModule,DxPopupModule,DxDataGridModule,DxButtonModule ,DxTemplateModule,DxLoadIndicatorModule,DxLoadPanelModule, DxTabPanelModule,DxCheckBoxModule } from "devextreme-angular";
import { CommonService } from './services/common.service';
import { DeviceinventoryComponent } from './components/maintainence/deviceinventory/deviceinventory.component';
import { DispatchComponent } from './components/dispatcher/dispatch/dispatch.component';
import { PatrolcarsComponent } from './components/maintainence/patrolcars/patrolcars.component';
import { HandheldsComponent } from './components/maintainence/handhelds/handhelds.component';
import { AccessoriesComponent } from './components/maintainence/accessories/accessories.component';
import { HandheldinventoryComponent } from './components/maintainence/deviceinventory/handheldinventory/handheldinventory.component';
import { AccessoryinventoryComponent } from './components/maintainence/deviceinventory/accessoryinventory/accessoryinventory.component';
import { EmployeesComponent } from './components/dispatcher/employees/employees.component';
import { PatrolCarsinventoryComponent } from './components/maintainence/inventory/patrolcarsinventory/patrolcarsinventory.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: TranslateLanguageLoader
      }
    }),
    NgxDatatableModule,
    ToastaModule.forRoot(),
    TooltipModule.forRoot(),
    PopoverModule.forRoot(),
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    ChartsModule, DxTreeViewModule,
    FormsModule,DxSelectBoxModule,DxContextMenuModule,DxMenuModule,
    DxPopupModule,DxDataGridModule,DxButtonModule ,DxTemplateModule,DxLoadIndicatorModule,DxLoadPanelModule, DxTabPanelModule,DxCheckBoxModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SettingsComponent,
    UsersManagementComponent, UserInfoComponent, UserPreferencesComponent, ProgramSettingComponent,
    RolesManagementComponent, RoleEditorComponent, ViewDefinitionComponent,
    NotFoundComponent,
    NotificationsViewerComponent,
    SearchBoxComponent,
    EqualValidator,
    LastElementDirective,
    AutofocusDirective,
    BootstrapTabDirective,
    BootstrapToggleDirective,
    BootstrapSelectDirective,
    BootstrapDatepickerDirective,
    ModalComponentDirective,
    GroupByPipe,
    DeviceinventoryComponent,
    DispatchComponent,
    DispatchComponent,
    PatrolcarsComponent,
    HandheldsComponent,
    AccessoriesComponent,
    HandheldinventoryComponent,
    AccessoryinventoryComponent,
    EmployeesComponent,
    PatrolCarsinventoryComponent
  ],
  providers: [
    { provide: 'BASE_URL', useFactory: getBaseUrl },
    { provide: ErrorHandler, useClass: AppErrorHandler },
    AlertService,
    ConfigurationService,
    AppTitleService,
    AppTranslationService,
    NotificationService,
    NotificationEndpoint,
    AccountService,
    AccountEndpoint,
    LocalStoreManager,
    EndpointFactory,
    ModalService,
    CommonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}



export function getBaseUrl() {
  return document.getElementsByTagName('base')[0].href;
}
