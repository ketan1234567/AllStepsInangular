import { Component } from '@angular/core';
import { abc } from './emp';

class xyz implements abc{
  constructor(){

    console.log("This is xyz Constructor ");
    
  }
  showData(){
    
    console.log("This is show Data");
  }
  show1(){
    console.log("This is show1");
  }
  display() {
    console.log("This is display function");
  }

}
class pqr extends xyz{
constructor(){
  console.log("This is pqr construor ");
  
  super();
}
  mypqrMethod(){
    console.log("This is mypqrMethod");
  }


}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  viewProviders:[xyz,pqr]
})
export class AppComponent {
  constructor(private _xyz:xyz,private _pqr:pqr){
    _xyz.showData()
    _xyz.show1()
    _xyz.display()
    _pqr.mypqrMethod()
  }
  title = 'AllStepsInangular';
}
