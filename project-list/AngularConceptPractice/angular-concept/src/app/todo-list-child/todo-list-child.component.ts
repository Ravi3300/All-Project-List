import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-todo-list-child',
  templateUrl: './todo-list-child.component.html',
  styleUrls: ['./todo-list-child.component.scss']
})
export class TodoListChildComponent {
   @Input() todo!:any;
   @Output() getChildData:any = new EventEmitter<any>();
   childData:any =''
  constructor(private sharedService:SharedDataService){
    this.sharedService.getCommonData.subscribe((data:any)=>{
      this.childData = data;
    })
  }
   ngOnInit(){
    console.log(this.todo,"asdsa")
   }

   emitMessage(){
     this.getChildData.emit(this.childData)
   }
}
