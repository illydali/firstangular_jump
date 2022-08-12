import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddEmpLinkBootComponent } from "./add-emp-link-boot/add-emp-link-boot.component";
import { AddEmpComponent } from "./add-emp/add-emp.component";
import { ListEmpLinkBootComponent } from "./list-emp-link-boot/list-emp-link-boot.component";
import { ListEmpComponent } from "./list-emp/list-emp.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuardService } from "./service/auth-guard.service";
import { UpdateEmpLinkBootComponent } from "./update-emp-link-boot/update-emp-link-boot.component";
import { UpdateEmpComponent } from "./update-emp/update-emp.component";

const routes: Routes = [
    // localhost:4200 (localhost:4200/employees)
    // {path : "**", component:LoginComponent},
    {path : '', redirectTo: 'login', pathMatch: 'full'},
    {path : 'login', component:LoginComponent},

    // employees = load ListEmpComponent
    {path: 'employees', component:ListEmpComponent, canActivate:[AuthGuardService]},
    {path: 'add', component:AddEmpComponent, canActivate:[AuthGuardService]},
    {path: 'update/:id', component:UpdateEmpComponent, canActivate:[AuthGuardService]},

    {path: 'employees-boot', component:ListEmpLinkBootComponent, canActivate:[AuthGuardService]},
    {path: 'employees-add-boot', component: AddEmpLinkBootComponent, canActivate:[AuthGuardService]},
    {path: 'employees-update-boot/:id', component: UpdateEmpLinkBootComponent, canActivate:[AuthGuardService]}
]

@NgModule({
    //AppRoutingModule is using the RouterModule
    // import it / configure it
    imports: [RouterModule.forRoot(routes)],
    // export RouterModule / used by other modules / outside AppRoutingModule
    exports: [RouterModule]
})
export class AppRoutingModule {}