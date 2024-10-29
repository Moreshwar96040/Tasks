import { Component, inject, Input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  close = output<void>();
  addNewTask = output<NewTask>();
  enteredTitle = ''
  enteredSummary = ''
  enteredDueDate = ''
  tasksService=inject(TasksService)
  @Input(({required:true})) userId!:string
  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        dueDate: this.enteredDueDate
      },
      this.userId
    )
  }
}
