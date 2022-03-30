import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  title = new FormControl('');
  description = new FormControl('');

  constructor(
    private dialogRef: MatDialogRef<AddTodoComponent>,
  ) { 
  }

  ngOnInit(): void {
  }

  addTodo() {
    // check if validated
    if(this.title.value && this.description.value) {
      this.dialogRef.close({
        todo: {
          title: this.title.value,
          description: this.description.value,
          completed: false
        }
      })
    }
  }

}
