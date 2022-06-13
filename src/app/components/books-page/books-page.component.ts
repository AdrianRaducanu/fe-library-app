import { Component, OnInit } from '@angular/core';
import {BookDataService} from "../../services/book-data.service";
import {BookModel} from "../../models/book-model.model";
import {Subject} from "rxjs";

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.scss']
})
export class BooksPageComponent implements OnInit{

  books:BookModel[] = []

  noPage = 1;
  noBooksOnPage = 20;
  booksOnPage: BookModel[] = this.books.slice(Math.floor((this.noPage-1)*this.noBooksOnPage), (this.noPage)*this.noBooksOnPage-1)
  constructor(public bookData : BookDataService) {

  }

  ngOnInit(): void {
    this.bookData.subBook$?.subscribe(
      item => {
        this.books= item;
      })
    }



  incrementPageNumber(){

  }
  decrementPageNumber(){
  }


}
