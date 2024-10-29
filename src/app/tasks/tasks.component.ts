import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { NewTask, Task } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  @Input({
    required: true
  }) userName!: string;

  @Input({ required: true }) userId!: string;

  // private tasksService =new TasksService(); it will create new instance and data will not be shared across different components
  // using dependency injection through constructor object will be created once will be shared across different components
  constructor(private tasksService: TasksService){
  }

  isAddTask = false;
  get  slectedUserTasks():Task[] {
    return this.tasksService.getUserTasks(this.userId);
  }

  completedTask(taskId: string) {
    this.tasksService.removeTask(taskId)
  }

  addTask() {
    this.isAddTask = true;
  }

  onClose() {
    this.isAddTask = false;
  }

  addNewTask(newTask: NewTask) {
    this.tasksService.addTask(newTask,this.userId);
  }
    
}
