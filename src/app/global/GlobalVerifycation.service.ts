import { Injectable } from "@angular/core";
import {
  CanLoad,
  Route,
  UrlSegment,
  CanActivate,
  Router,
} from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "../login/login.service";
@Injectable({
  providedIn: "root",
})
export class GlobalVerifycationService implements CanActivate {
  constructor(private loginService: LoginService) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    console.log(this.loginService.user);
    return true;
  }
}
