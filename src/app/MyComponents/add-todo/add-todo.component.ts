import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../Todo';
@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {
    title!: string;
    description!: string;
    @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();
    
    constructor(){
    }
    onSubmit() {
      const newTodo:Todo={
        serial_no:5,
        title: this.title,
        desc: this.description,
        active:true
      }
      if(newTodo.desc && newTodo.title)
         this.todoAdd.emit(newTodo);
    }
}
