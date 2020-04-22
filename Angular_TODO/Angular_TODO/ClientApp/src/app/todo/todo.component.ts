import { Component, ViewChild, ElementRef, Renderer2, HostListener } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-todo-component',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  public todos: Todo[] = [
    { id: 1, description: "Learn about React", done: false },
    { id: 2, description: "Meet friend for lunch", done: false },
    { id: 3, description: "Build really cool todo app", done: false }
  ];
  descricao: string = "";
  Editando: number = -1;

  constructor(private toastr: ToastrService) {

  }

  public addTodo() {
    let newTodo: Todo = { id: this.todos.length + 1, description: this.descricao, done: false };
    console.log(newTodo);
    console.log(this.descricao);

    this.todos.push(newTodo);
    this.toastr.success("Nova tarefa '" + this.descricao + "' adicionada.", 'Nova Tarefa.',
      {

        timeOut: 3000,
        progressBar: true,
        progressAnimation: "decreasing",
        easing: 'ease-in',
        easeTime: 300

      }
    );

    this.descricao = "";
  }
  public editar(id: number) {
    this.Editando = id;

  }
  public salvar(id: number, descricao: string) {

    console.log(id);
    console.log(descricao);
    let todochange = this.todos.filter(x => x.id == id)[0];
    let idx = this.todos.indexOf(todochange);
    //todochange.done = true;
    if (idx != -1)
      this.todos.splice(idx, 1, todochange);
    console.log(todochange);
    this.toastr.info("Tarefa '" + descricao + "' modificada.", 'Tarefa modificada!',
      {
        timeOut: 3000,
        progressBar: true,
        progressAnimation: "decreasing",
        easing: 'ease-in',
        easeTime: 300
      });
    this.Editando = -1;
  }
  public doneTodo(id: number) {
    console.log(id);
    let todochange = this.todos.filter(x => x.id == id)[0];
    let idx = this.todos.indexOf(todochange);
    todochange.done = !todochange.done;
    if (idx != -1)
      this.todos.splice(idx, 1, todochange);

    let msg: string;
    if (todochange.done)
      msg = "Tarefa '" + todochange.description + "' concluida.";
    else
      msg = "Tarefa '" + todochange.description + "' voltou a estar pendente.";
    this.toastr.info(msg, 'Status da Tarefa',
      {
        timeOut: 3000,
        progressBar: true,
        progressAnimation: "decreasing",
        easing: 'ease-in',
        easeTime: 300
      });
  }
}


interface Todo {
  id: number;
  description: string;
  done: boolean;
}

