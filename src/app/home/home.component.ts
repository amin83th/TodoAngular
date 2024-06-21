import { Component,EventEmitter,Input, Output } from '@angular/core';
import { NgFor,NgIf } from '@angular/common';
import { DUMMY_TASKS } from '../dummy-tasks';
import { log } from 'node:console';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
//  @Input({required: true}) allTasks! :{
//     id:string,
//     todo:string,
//     time:string,
//     finish:string,
//   };

  allTasks = DUMMY_TASKS;
  

  complate(e:MouseEvent, task:any){
   DUMMY_TASKS[task.id-1].finish = false;
  //  if(this.allTasks.find(t => t.id === task.id)){
  //   console.log("meee");
  //   this.allTasks[task.id-1].finish = false;
  //   this.saveTasks();
  //  }
  }
  noComplate(e:MouseEvent,task:any){
    DUMMY_TASKS[task.id-1].finish = true; 
  }

  // delete
  delated(task:any){
    DUMMY_TASKS.splice(task.id-1,1)

  }
  // edit
  @Output() select = new EventEmitter();

  edited(task:any){
    this.select.emit("on")
  }
}
