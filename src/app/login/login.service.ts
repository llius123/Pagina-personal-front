import { USER } from "./user.interface";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  constructor(private httpClient: HttpClient) {}

  public user;

  login(user, pass): Observable<USER> {
    return this.httpClient.post<USER>(environment.api + "/login", {
      user: user,
      pass: pass,
    });
  }
}
