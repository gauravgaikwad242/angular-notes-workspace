import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-display-todo',
  templateUrl: './display-todo.component.html',
  styleUrls: ['./display-todo.component.css']
})
export class DisplayTodoComponent implements OnInit {

  todos:Todo[]=[];
  constructor() { }

  ngOnInit(): void {
  }

  addTodo(todo:Todo){
    console.log(todo);
    this.todos.push(todo);
    console.log(this.todos);
  }
}
