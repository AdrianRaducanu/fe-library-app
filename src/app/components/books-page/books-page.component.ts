import {Component, ElementRef, OnInit, QueryList, ViewChildren} from '@angular/core';
import {BookDataService} from "../../services/book-data.service";
import {BookModel} from "../../models/book-model.model";
import {filter, Subject} from "rxjs";
import {BookServiceService} from "../../services/book-service.service";

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.scss']
})
export class BooksPageComponent implements OnInit{

  books:BookModel[] = []
  @ViewChildren("checkboxes") checkboxes: QueryList<ElementRef> = new QueryList<ElementRef>();

  noPage = 1;
  noBooksOnPage = 20;
  booksOnPage: BookModel[] = this.books.slice(Math.floor((this.noPage-1)*this.noBooksOnPage), (this.noPage)*this.noBooksOnPage-1)
  constructor(
    private bookData : BookDataService,
    private bookApi : BookServiceService
  ) {}

  categories: String[] = ["Medical", "Science-Geography", "Art-Photography", "Biography", "Business-Finance-Law", "Childrens-Books","Computing","Crafts-Hobbies", "Crime-Thriller","Religion", "Poetry-Drama"];
  authors: String[] = ["Stephen King", "Stephen Hawking", "J. R. R. Tolkien", "Yuval Noah Harari"];

  ngOnInit(): void {
    this.bookData.subBook$?.subscribe(
      item => {
        this.books= item;
      })
    }



  incrementPageNumber(){
    if(this.noPage < Math.floor(this.books.length / this.noBooksOnPage)){
      this.noPage++;
    }
    console.log(this.categories);
  }
  decrementPageNumber(){
    if(this.noPage > 1){
      this.noPage--;
    }
  }
  search(){
    for(let category in this.categories){

    }
  }
  searchAllBooks(){
   this.bookApi.getAllBooks().subscribe(
     item => this.bookData.subBook$.next(item)
   );

    this.uncheckAll();
  }
  searchCategory(category: String){
    let goodItems: BookModel[] = [];
    for(let book of this.books){
      if(book.category === category){
        goodItems.push(book);
      }
    }
    this.bookData.subBook$.next(goodItems);
  }
  searchAuthor(author: String){
    let goodItems: BookModel[] = [];
    for(let book of this.books){
      if(book.author === author){
        goodItems.push(book);
      }
    }
    this.bookData.subBook$.next(goodItems);
  }

  uncheckAll() {
    this.checkboxes.forEach((element) => {
      element.nativeElement.checked = false;
    });
  }

}
