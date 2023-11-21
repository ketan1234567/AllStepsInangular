import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from './services/book.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
AllBook:any
  title = 'AllStepsInangular';
  constructor(private route:Router,private _services:BookService){
// this._services.getBooks().then((value)=>{
//   this.AllBook=value
//   console.log(this.AllBook);
  
// })
this._services.getBooks().then(books=>{
  this.AllBook=books
})
  }
  redirect(){
    this.route.navigate(['contact'])

  }

}
