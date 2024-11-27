import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../Todo';
import { log } from 'node:console';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input() todo !: Todo; 
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();

  onClick(todo: Todo) {
    console.log("Button clicked");
    this.todoDelete.emit(todo);
  }
}
