import { Component, OnInit } from '@angular/core';
import {BookDataService} from "../../services/book-data.service";
import {BookServiceService} from "../../services/book-service.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  titleOrAuthor:String = '';

  constructor(
    private bookData: BookDataService,
    private bookApi: BookServiceService
    ) { }

  ngOnInit(): void {

  }

  onClickSearch():void{
    console.log(this.titleOrAuthor);
    this.bookApi.getBookWithTitleOrAuthorLike(this.titleOrAuthor).subscribe({
      next : value => {
        //console.log(value);
        this.bookData.deleteBooks();
        this.bookData.setterBooks(value);
        console.log(this.bookData.getterBooks());
      }
    });

  }

}
