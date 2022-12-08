import { TasksService } from './../services/tasks.service';
import { Component, OnInit, ViewChild} from "@angular/core";
import { IonInput } from '@ionic/angular';
import { Task } from '../models/task';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  @ViewChild('inputTask', {static:true}) inputTask:IonInput;

  public tasks: Task[];
  public tasktext: string;
  private task:Task;
  
  constructor(private taskService:TasksService) {
    this.taskService.getTasks().subscribe(resp=>{
      this.tasks = resp
    });
    this.tasktext = "algo";
   }

   public addTask() {
     this.task={
      text:this.tasktext,
      completed:false
     }
     this.taskService.addTask(this.task);
     this.tasktext="";
     this.inputTask.setFocus();
   }
 
   public removeTask(id:string) {
    this.taskService.removeTask(id);
   }

   public completeTask(id: string){
    this.taskService.completeTask(id);
   }

   ngAfterViewInit() {
    setTimeout(() => {
      this.inputTask.setFocus();
    },500);
  }
}
