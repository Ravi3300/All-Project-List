import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-component',
  templateUrl: './button-component.component.html',
  styleUrls: ['./button-component.component.scss']
})
export class ButtonComponentComponent {
  @Input() label!: any;
  @Input() type: any = 'button';
  @Input() disabled: boolean = false;

  constructor(){}
  ngOnInit(){}
} 
