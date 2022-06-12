import { Component, OnInit } from '@angular/core';
import {BookDataService} from "../../services/book-data.service";
import {BookModel} from "../../models/book-model.model";

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.scss']
})
export class BooksPageComponent implements OnInit {

  allBooks: BookModel[] = [...this.bookData.getterBooks()];

  pageNumber: number = 1;
  numberOfBooksPerPage: number = 20;

  booksOnPage: BookModel[] = this.allBooks.slice(Math.round((this.pageNumber-1)*10), Math.round((this.pageNumber-1)*10 + this.numberOfBooksPerPage));


  constructor(private bookData : BookDataService) { }

  ngOnInit(): void {

  }

  incrementPageNumber(){
    this.pageNumber < Math.round(this.allBooks.length/this.numberOfBooksPerPage) ? Math.round(this.pageNumber++) : Math.round(this.pageNumber = this.allBooks.length/this.numberOfBooksPerPage);
    this.booksOnPage = this.allBooks.slice(Math.round((this.pageNumber-1)*10), Math.round((this.pageNumber-1)*10 + this.numberOfBooksPerPage));
  }
  decrementPageNumber(){
    this.pageNumber-1 > 0 ? Math.round(this.pageNumber--) : Math.round(this.pageNumber = 1);
    this.booksOnPage = this.allBooks.slice((this.pageNumber-1)*10, (this.pageNumber-1)*10 + this.numberOfBooksPerPage);
  }

}
