import { Component } from "@angular/core";
import { LoginService } from "./login.service";
import { Router } from "@angular/router";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  constructor(private loginService: LoginService, private route: Router) {}
  login(user, pass) {
    this.loginService.login(user, pass).subscribe((resp) => {
      this.loginService.user = resp;
    });
  }
}
