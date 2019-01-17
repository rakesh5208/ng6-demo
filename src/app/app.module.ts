import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { AccountSettingsModule } from './account-settings/account-settings.module';
import { UsersModule } from './users/users.module';
import { RoleAssignmentComponent } from './role-assignment/role-assignment.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    RoleAssignmentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    DashboardModule,
    AccountSettingsModule,
    UsersModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
