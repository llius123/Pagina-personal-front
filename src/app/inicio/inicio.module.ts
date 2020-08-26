import { InicioComponent } from "./inicio.component";
import { NgModule } from "@angular/core";
import { NgZorroModule } from "../global/NgZorro.module";
import { InicioService } from "./inicio.service";
import { LoginService } from "../login/login.service";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [InicioComponent],
  imports: [NgZorroModule, CommonModule, ReactiveFormsModule],
  providers: [InicioService, LoginService],
  bootstrap: [],
})
export class InicioModule {}
