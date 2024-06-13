import { CreateTaskFormComponent } from './../create-task-form/create-task-form.component';
import { Component } from '@angular/core';
import { TaskCardComponent } from '../task-card/task-card.component';
import { MatIconModule } from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {
  MatDialog
} from '@angular/material/dialog';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    TaskCardComponent,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  tasks=[1,1,1,1,1,1]

  constructor(public dialog: MatDialog){

  }
  handleOpenCreateTaskForm(){
    this.dialog.open(CreateTaskFormComponent)
  }
}
