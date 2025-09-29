import { Component } from '@angular/core';

@Component({
  selector: 'app-chip-input-box',
  templateUrl: './chip-input-box.component.html',
  styleUrls: ['./chip-input-box.component.scss']
})
export class ChipInputBoxComponent {
  chipInput:any;
  allChipData:any[] = [];

   getChipData(){
    let chipFormate={
      id:new Date().getTime(),
      name:this.chipInput
    }
     
    this.allChipData.push(chipFormate);
    // this.chipInput = ''
   }
}
