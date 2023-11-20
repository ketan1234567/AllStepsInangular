import { Component } from '@angular/core';
import { NumListService } from '../num-list.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component {

  ListA:any
ListB:any
  constructor(private _NumAlist:NumListService){
    this.ListB=this. _NumAlist.getList();
  }
  CompOne(val:any){
    this.ListA=this._NumAlist.getNumber(val)
  }


}
