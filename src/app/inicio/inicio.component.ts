import { Component, OnInit } from "@angular/core";
import { InicioService } from "./inicio.service";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "inicio",
  templateUrl: "./inicio.component.html",
  styleUrls: ["./inicio.component.scss"],
})
export class InicioComponent implements OnInit {
  public projects = [];
  public todos = [];
  public newTodo: FormGroup;
  private _projectSelected;

  constructor(private inicioService: InicioService) {}

  ngOnInit() {
    this.newTodo = new FormGroup({
      TITLE: new FormControl(),
    });
    this.inicioService.getProjects().subscribe((resp) => {
      this.projects = resp.projects;
    });
  }

  selectProject(project) {
    this.inicioService.getTodos(project.ID).subscribe((resp) => {
      this.todos = resp.todo;
      this._projectSelected = project;
    });
  }

  done(todo, index) {
    todo.DONE = todo.DONE === 1 ? 0 : 1;
    this.todos[index] = todo;
    this.inicioService.updateTodo(todo).subscribe((resp) => console.log(resp));
  }

  deleteTodo(todo, index) {
    this.inicioService.deleteTodo(todo.ID).subscribe((resp) => {
      this.todos.splice(index, 1);
    });
  }

  isVisible = false;

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.inicioService
      .createTodo(this.newTodo.value, this._projectSelected.ID)
      .subscribe((resp) => {
        this.isVisible = false;
        this.todos.push(resp.todo);
        this.newTodo.reset();
      });
  }

  handleCancel(): void {
    console.log("Button cancel clicked!");
    this.isVisible = false;
  }
}
