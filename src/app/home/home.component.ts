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

  addTodo() {
    //open a new todo form

    const dialogRef = this.dialog.open(AddTodoComponent, {
      width: '500px',
      autoFocus: true
    })

    dialogRef.afterClosed().subscribe(result => {
      if(result?.todo) {
        this.todos.push(result.todo);
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
    console.log(index, this.todos)
    if(index) {
      this.todos = this.todos.filter((todo, i) => {
        if(i !== index) {
          return true;
        } else {
          return false;
        }
      });
    }
  }

  editTodo(index: number) {
    //open the todo form
  }

  markComplete(index: number) {
    this.todos[index].completed = true;
  }
}

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}