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
    this.bookApi.getBookWithTitleOrAuthorLike(this.titleOrAuthor).subscribe(
      item => this.bookData.subBook$?.next(item)
    )


  }

}
