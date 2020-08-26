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

  public user: string;
  public pass: string;

  login() {
    this.user = "admin";
    this.pass = "admin";
    this.loginService.login(this.user, this.pass).subscribe((resp) => {
      this.loginService.user = resp;
      this.route.navigate(["inicio"]);
    });
  }
}
