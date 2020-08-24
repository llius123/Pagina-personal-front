import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { InicioComponent } from "./inicio/inicio.component";
import { GlobalVerifycationService } from "./global/GlobalVerifycation.service";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "inicio",
    component: InicioComponent,
    canActivate: [GlobalVerifycationService],
  },
  {
    path: "**",
    redirectTo: "login",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
