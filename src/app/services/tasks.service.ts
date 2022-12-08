import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private tasksU: string[] = [];
  private tasksC: string[] = [];

  constructor() { 
    this.tasksU.push("Tarea 1");
    this.tasksU.push("Tarea 2");
  }
  public getTasks():string[] {
    return this.tasksU;
  }

  public getCompleted():string[] {
    return this.tasksC;
  }

  public addTask(task:string) {
    this.tasksU.push(task);
  }

  public removeTask(pos:number){
    this.tasksU.splice(pos, 1);
  }

  public completeTask(pos:number){
    this.tasksC.push(this.tasksU[pos]);
    this.tasksU.splice(pos, 1);
  }

  public uncompleteTask(pos:number){
    this.tasksU.push(this.tasksC[pos]);
    this.tasksC.splice(pos, 1);
  }
}
