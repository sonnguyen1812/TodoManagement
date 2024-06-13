import { TaskCardComponent } from './../task-card/task-card.component';
import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

import {MatRadioModule} from '@angular/material/radio';


@Component({
  selector: 'app-create-task-form',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatRadioModule],
  templateUrl: './create-task-form.component.html',
  styleUrl: './create-task-form.component.scss'
})
export class CreateTaskFormComponent {

  taskItem:any={
    title:"",
    description:"",
    prioritize:""
  }

  onSubmit(){
    console.log("values", this.taskItem)
  }
}
