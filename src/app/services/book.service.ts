import { Injectable } from '@angular/core';
import { Book } from '../book';
import { BOOKS } from '../mock-books';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }
  getBooks():Promise<Book[]>{
    return Promise.resolve(BOOKS)
  }

  getbook(id:number):Promise<any>{
    return this.getBooks().then(books=>books.find(book=>book.id===id));
}
}
