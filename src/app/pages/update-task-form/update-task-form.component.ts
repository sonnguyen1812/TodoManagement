import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

import {MatRadioModule} from '@angular/material/radio';

@Component({
  selector: 'app-update-task-form',
  standalone: true,
  imports: [MatInputModule,MatFormFieldModule,FormsModule, MatButtonModule, MatRadioModule],
  templateUrl: './update-task-form.component.html',
  styleUrl: './update-task-form.component.scss'
})
export class UpdateTaskFormComponent {

  taskItem:any={
    title:"Do homework",
    description:"do it fast",
    prioritize:"yes"
  }

  onSubmit(){
    console.log("values", this.taskItem)
  }
}
