import { Component } from '@angular/core';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-todo-list-parent',
  templateUrl: './todo-list-parent.component.html',
  styleUrls: ['./todo-list-parent.component.scss']
})
export class TodoListParentComponent {
  todoValue:any='';
  childData:any;
  name:any = 'akshat pal'
    constructor(private sharedService:SharedDataService){}
    getChildData(msg:any){
      this.childData = msg
   }

   sendData(){
     this.sharedService.setCommonData(this.todoValue)
   }
}
