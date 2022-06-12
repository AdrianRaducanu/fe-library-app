import { Injectable } from '@angular/core';
import {BookModel} from "../models/book-model.model";

@Injectable({
  providedIn: 'root'
})
export class BookDataService {

  allBooks: BookModel[] = [];

  constructor() { }

  getterBooks(){
    return this.allBooks;
  }
  setterBooks(book: any) : void{
    this.allBooks = book;
  }
  deleteBooks():void{
    this.allBooks = [];
  }

}
