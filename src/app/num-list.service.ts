import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumListService {
  list:number[]=[100]

  constructor() { }

  getNumber(number:any){
  return this.list.push(number)
  }
  getList(){
    return this.list
  }
}
