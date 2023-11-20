import { Component } from '@angular/core';
import { NumListService } from '../num-list.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {
ListA:any
ListB:any
  constructor(private _NumAlist:NumListService){
    this.ListB=this. _NumAlist.getList();
  }
  CompOne(val:any){
    this.ListA=this._NumAlist.getNumber(val)
  }


}
