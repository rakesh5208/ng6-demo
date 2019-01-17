import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { RoleAssignmentComponent } from './role-assignment/role-assignment.component';

const routes: Routes = [
  {path:'dashboard',component:DashboardComponent},
  {path:'settings',component:AccountSettingsComponent},
  {path:'role-assignment',component:RoleAssignmentComponent},
  {path:'users',loadChildren:'./users/users.module#UsersModule'},
  {path:'',redirectTo:'/dashboard',pathMatch:'full'},
  {path:'**',redirectTo:'/dashboard',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
