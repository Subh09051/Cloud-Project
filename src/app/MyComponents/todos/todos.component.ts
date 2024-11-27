import { Component } from '@angular/core';
import { Todo } from '../../Todo';
import { CommonModule } from '@angular/common';  // Import CommonModule
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { AddTodoComponent } from "../add-todo/add-todo.component";




@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, TodoItemComponent, AddTodoComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
    todos:Todo[];

    constructor(){
      this.todos=[
        {
          serial_no:10,
          title:"This is title 1",
          desc:"Desc1",
          active:true
        },
        {
          serial_no:20,
          title:"This is title 2",
          desc:"Desc2",
          active:true
        },
        {
          serial_no:30,
          title:"This is title 3",
          desc:"Desc3",
          active:true
        }
      ]
    }

    onTodoDelete(todo:Todo){
      console.log("Todo Deleted");
      if(this.todos.indexOf(todo) !== -1){
        this.todos.splice(this.todos.indexOf(todo), 1);
      }
    }

    onTodoAdd(todo:Todo){
      console.log("Todo Added");
      this.todos.push(todo);
    }
}
