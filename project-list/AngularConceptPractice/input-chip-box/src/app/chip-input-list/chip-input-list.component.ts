import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chip-input-list',
  templateUrl: './chip-input-list.component.html',
  styleUrls: ['./chip-input-list.component.scss']
})
export class ChipInputListComponent {
  @Input() allChipData:any[] = [];
  ngOnInit(){
    console.log(this.allChipData,"dcds")
  }

  deleteChip(id:any){
    console.log(id,"id")
     this.allChipData = this.allChipData.filter((data:any)=> data.id != id)
  }
}
