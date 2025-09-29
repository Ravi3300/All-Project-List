import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent {
  form= new FormGroup({
    fName:new FormControl('',Validators.required),
    lName:new FormControl('',Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', Validators.required),
  })
  constructor(){

  }

  get fName() {
  return this.form.get('fName') as FormControl;
}

get lName() {
  return this.form.get('lName') as FormControl;
}

get email() {
  return this.form.get('email') as FormControl;
}

get phone() {
  return this.form.get('phone') as FormControl;
}

submitFormData(){
  let obj={
     firstName:this.form.get('fName')?.value,
     lastName:this.form.get('lName')?.value,
     email:this.form.get('email')?.value,
     phone:this.form.get('phone')?.value,
  }
   console.log(obj,"formSubmit")
}
}
