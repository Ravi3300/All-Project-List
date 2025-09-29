import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
   getCommonData:any = new BehaviorSubject<any>('')
  constructor() { }

  setCommonData(val:any){
    this.getCommonData.next(val)
  }
}
