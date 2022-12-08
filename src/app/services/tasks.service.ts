import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private firestore:AngularFirestore) { 
  }
  public getTasks():Observable<Task[]> {
    return this.firestore.collection('tasks').snapshotChanges().pipe(
      map(actions =>{
        return actions.map(a=>{
          const data = a.payload.doc.data() as Task;
          const id = a.payload.doc.id;
          return {id,...data}
        });
      }));
  }

  public addTask(task:Task) {
    this.firestore.collection("tasks").add(task)
  }

  public removeTask(id:string){
    this.firestore.collection('tasks').doc(id).delete();
  }

  public completeTask(id:string){
    this.firestore.collection('tasks').doc(id).update({completed:true})
  }

  public uncompleteTask(id:string){
    this.firestore.collection('tasks').doc(id).update({completed:false})
  }
}
