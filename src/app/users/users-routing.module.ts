import { NgModule } from "@angular/core";
import { RouterModule, Route } from '@angular/router';
import { UsersComponent } from './users.component';
import { UserListComponent } from './user-list/user-list.component';
import { ViewUserComponent } from './view-user/view-user.component';
const routes: Route[] = [
    {
        path: 'users',
        component: UsersComponent,
        children: [
            { path: '', component: UserListComponent },
            { path: 'list', component: UserListComponent },
            { path: 'view/:id', component: ViewUserComponent },
            { path: '**', redirectTo: "list", pathMatch: 'full' },
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule {

}