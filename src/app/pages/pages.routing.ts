import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { Grafica1Component } from "./grafica1/grafica1.component";
import { PagesComponent } from "./pages.component";
import { ProgressComponent } from "./progress/progress.component";
import { AccountSettingsComponent } from "./account-settings/account-settings.component";
import { PromesasComponent } from "./promesas/promesas.component";
import { RxjsComponent } from "./rxjs/rxjs.component";


const routes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    children: [
      { path: '', component: DashboardComponent, data:{titulo: 'Dashboard'} },
      { path: 'progress', component: ProgressComponent,data:{titulo: 'ProgressBar'} },
      { path: 'grafical', component: Grafica1Component,data:{titulo: 'Graficas'}},
      { path: 'account-settings', component: AccountSettingsComponent,data:{titulo: 'Ajustes de tema'} },
      { path: 'promesas', component: PromesasComponent,data:{titulo: 'Promesas'} },
      { path: 'rxjs', component:RxjsComponent,data:{titulo: 'Rxjs'}}
      //{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
