import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTodoComponent } from '../add-todo/add-todo.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Apty Todo App';
  todos: Todo[] = []
  completedTodos: Todo[] = [];

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  addTodo(todo: any = {}, index: number = -1) {
    //open a new todo form or edit existing todo

    const dialogRef = this.dialog.open(AddTodoComponent, {
      width: '500px',
      autoFocus: true,
      data: { todo, index }
    })

    dialogRef.afterClosed().subscribe(result => {
      if(result?.todo) {
        console.log(result);
        if(result.index > -1) {
          this.todos[result.index] = result.todo;
        } else {
          this.todos.push(result.todo);
        }
      }
    })
  }

  updateTodo(action: string, index: number) {
    if(action === 'delete') {
      this.deleteTodo(index);
    } else if(action === 'edit') {
      this.editTodo(index);
    } else if(action === 'markComplete') {
      this.markComplete(index);
    }
  }


  deleteTodo(index: number) {
    if(index !== null && index !== undefined) {
      this.todos = this.todos.filter((todo, i) => i !== index);
    }
  }

  editTodo(index: number) {
    //open the todo form
    this.addTodo(this.todos[index], index);
  }

  markComplete(index: number) {
    if(index !== null && index !== undefined) {
      this.todos[index].completed = true;
    }
  }
}

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}