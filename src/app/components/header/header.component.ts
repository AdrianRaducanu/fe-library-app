import { Component, OnInit } from '@angular/core';
import {BookDataService} from "../../services/book-data.service";
import {BookServiceService} from "../../services/book-service.service";
import {UsersDataService} from "../../services/users-data.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  titleOrAuthor:String = '';
  userLogged : String = ''
  constructor(
    private bookData: BookDataService,
    private bookApi: BookServiceService,
    private userData: UsersDataService
    ) { }

  ngOnInit(): void {
    this.userData.subUser$.subscribe(
      item => {
        this.userLogged =  item.firstName +" "+ item.lastName;
        console.log(item)
      }

    )
  }

  onClickSearch():void{
    this.bookApi.getBookWithTitleOrAuthorLike(this.titleOrAuthor).subscribe(
      item => this.bookData.subBook$?.next(item)
    )


  }

}
