import { NgModule } from "@angular/core";
import { LoginComponent } from "./login.component";
import { LoginService } from "./login.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [LoginComponent],
  imports: [HttpClientModule],
  providers: [LoginService],
  bootstrap: [],
})
export class LoginModule {}
