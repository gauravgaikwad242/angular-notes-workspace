import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-input-todo',
  templateUrl: './input-todo.component.html',
  styleUrls: ['./input-todo.component.css']
})
export class InputTodoComponent implements OnInit {
 
  @Output() todos=new EventEmitter<Todo>();

  task:string;
  desc:string;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log("onSubmit function inside input todo")
    const todo={
      task:this.task,
      desc:this.desc,
    };
   this.todos.emit(todo);
  }

}
