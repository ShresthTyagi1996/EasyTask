import { Injectable, Input } from '@angular/core';
import { type NewTaskData } from './tasks/task/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks = [
      {
        id: 't1',
        userId: 'u1',
        title: 'Master Angular',
        summary: 'Learn Angular from scratch',
        dueDate: '2025-12-31'
      },
      {
        id: 't2',
        userId: 'u3',
        title: 'Prepare for the interview',
        summary: 'Prepare and describe your projects for the interview',
        dueDate: '2025-03-31'
      },
      {
        id: 't3',
        userId: 'u3',
        title: 'Build First prototype',
        summary: 'Build a first prototype of the online shop website',
        dueDate: '2025-01-31'
      }
    ]
  @Input({ required:true }) userId!: string;
  

  constructor() { 
    const tasks = localStorage.getItem('tasks');

    if(tasks){
      this.tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(taskData: NewTaskData, userId: string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date
    });
    this.saveTasks();
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks();
  }

  private saveTasks(){
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

}
