import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BookService } from '../services/book.service';
import { switchMap } from 'rxjs';
import { Book } from '../book';
import { Location } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [Location],
})
export class AboutComponent implements OnInit {
  book: Book = new Book();
  constructor(private route:ActivatedRoute,private router:Router,private _bookservices:BookService,private _location:Location){

    }
  ngOnInit() {
    this.route.params.pipe(
      switchMap((params: Params) => this._bookservices.getbook(+params['id']))
  ).subscribe(book => this.book = book);
   console.log(this.book);
   

   
  }
  goBack():void{
    this._location.back();

  }
  updateBook(id:any):void{

  }

}
