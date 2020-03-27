import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Dashboard } from "./dashboard.component";
import { CustomerModuleComponent } from "./customer-module/customer-module.component";

const routes: Routes = [
  {
    path: "customers",
    component: CustomerModuleComponent
    //   loadChildren: () =>
    //     import("./customers/customers.module").then(m => m.CustomersModule)
  },
  { path: "", pathMatch: "full", component: Dashboard }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
