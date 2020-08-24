import { NgModule } from "@angular/core";
import { LoginComponent } from "./login.component";
import { LoginService } from "./login.service";
import { HttpClientModule } from "@angular/common/http";
import { NgZorroModule } from "../global/NgZorro.module";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [LoginComponent],
  imports: [HttpClientModule, NgZorroModule, FormsModule],
  providers: [LoginService],
  bootstrap: [],
})
export class LoginModule {}
