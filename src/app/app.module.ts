import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginModule } from "./login/login.module";
import { InicioModule } from "./inicio/inicio.module";
import { GlobalVerifycationService } from "./global/GlobalVerifycation.service";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, LoginModule, InicioModule],
  providers: [GlobalVerifycationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
