import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddEmpComponent } from "./add-emp/add-emp.component";
import { ListEmpComponent } from "./list-emp/list-emp.component";
import { LoginComponent } from "./login/login.component";
import { UpdateEmpComponent } from "./update-emp/update-emp.component";

const routes: Routes = [
    // localhost:4200 (localhost:4200/employees)
    {path : '', redirectTo: 'login', pathMatch: 'full'},
    {path : 'login', component:LoginComponent},
    // employees = load ListEmpComponent
    {path: 'employees', component:ListEmpComponent},
    {path: 'add', component:AddEmpComponent},
    {path: 'update/:id', component:UpdateEmpComponent}
]

@NgModule({
    //AppRoutingModule is using the RouterModule
    // import it / configure it
    imports: [RouterModule.forRoot(routes)],
    // export RouterModule / used by other modules / outside AppRoutingModule
    exports: [RouterModule]
})
export class AppRoutingModule {}