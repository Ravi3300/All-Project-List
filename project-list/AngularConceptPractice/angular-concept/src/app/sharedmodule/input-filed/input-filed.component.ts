import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-filed',
  templateUrl: './input-filed.component.html',
  styleUrls: ['./input-filed.component.scss']
})
export class InputFiledComponent{
  @Input() label!: any;
  @Input() type: any = 'text';
  @Input() placeholder: any = '';
    @Input() control!: FormControl;  
   constructor(){}
   ngOnInit(){}

}
