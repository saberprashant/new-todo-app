import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss']
})
export class TodoCardComponent implements OnInit {
  @Input() title = '';
  @Input() description = '';
  @Input() completed = false;

  @Output() update: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  updateTodo(action: string) {
    this.update.emit(action);
  }

}
