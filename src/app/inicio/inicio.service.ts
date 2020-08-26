import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { LoginService } from "../login/login.service";

@Injectable({
  providedIn: "root",
})
export class InicioService {
  constructor(
    private httpClient: HttpClient,
    private loginService: LoginService
  ) {}

  getProjects(): Observable<any> {
    return this.httpClient.get<any>(
      environment.api + "/projects/" + this.loginService.user.user.ID
    );
  }
  getTodos(projectId): Observable<any> {
    return this.httpClient.get<any>(environment.api + "/todo/" + projectId);
  }
  updateTodo(todo): Observable<any> {
    return this.httpClient.put<any>(environment.api + "/todo", todo);
  }
  deleteTodo(id): Observable<any> {
    return this.httpClient.delete<any>(environment.api + "/todo/" + id);
  }
  createTodo(todo, idProject): Observable<any> {
    return this.httpClient.post<any>(environment.api + "/todo", {
      ...todo,
      PROJECT_ID: idProject,
    });
  }
}
