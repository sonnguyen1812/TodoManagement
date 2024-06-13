import { Dialog } from '@angular/cdk/dialog';
import { Component } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import { UpdateTaskFormComponent } from '../update-task-form/update-task-form.component';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule
    ],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss'
})
export class TaskCardComponent {

  constructor(public dialog:MatDialog){}

  handleOpenEditTaskForm(){
    this.dialog.open(UpdateTaskFormComponent)
  }
}
