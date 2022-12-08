import { TasksService } from './../services/tasks.service';
import { Component, OnInit, ViewChild} from "@angular/core";
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  @ViewChild('inputTask', {static:true}) inputTask:IonInput;

  public tasks: string[];
  public task: string;
  
  constructor(private taskService:TasksService) {
    this.tasks = this.taskService.getTasks();
    this.task = "algo";
   }

   public addTask() {
     this.taskService.addTask(this.task);
     this.tasks=this.taskService.getTasks();
     console.log(this.tasks);
     this.task="";
     this.inputTask.setFocus();
   }
 
   public removeTask(pos:number) {
     this.taskService.removeTask(pos);
     this.tasks = this.taskService.getTasks();
   }

   public completeTask(pos: number){
    this.taskService.completeTask(pos);
   }

   ngAfterViewInit() {
    setTimeout(() => {
      this.inputTask.setFocus();
    },500);
  }
}
