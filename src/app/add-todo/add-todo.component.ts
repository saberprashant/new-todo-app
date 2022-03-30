import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  title = new FormControl('');
  description = new FormControl('');
  editIndex = -1;

  constructor(
    private dialogRef: MatDialogRef<AddTodoComponent>,
    @Inject(MAT_DIALOG_DATA) data: any
  ) { 
    if(data.todo?.title) {
      this.title.setValue(data.todo.title);
      this.description.setValue(data.todo.description);
      this.editIndex = data.index;
    }
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
        },
        index: this.editIndex
      })
    }
  }

}
