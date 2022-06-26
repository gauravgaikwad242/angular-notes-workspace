import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-service-todo',
  templateUrl: './service-todo.component.html',
  styleUrls: ['./service-todo.component.css']
})
export class ServiceTodoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  saveTodo(todo:Todo){
      console.log("inside save method",todo)
  }

}
