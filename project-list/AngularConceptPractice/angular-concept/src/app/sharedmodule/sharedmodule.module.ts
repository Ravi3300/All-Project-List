import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFiledComponent } from './input-filed/input-filed.component';
import { ButtonComponentComponent } from './button-component/button-component.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InputFiledComponent,
    ButtonComponentComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[InputFiledComponent,ButtonComponentComponent]
})
export class SharedmoduleModule { }
