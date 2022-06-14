import { Component, OnInit } from '@angular/core';
import {UsersDataService} from "../../services/users-data.service";
import {UsersModel} from "../../models/users-model.model";
import {ReviewServiceService} from "../../services/review-service.service";
import {BookServiceService} from "../../services/book-service.service";
import {BookModel} from "../../models/book-model.model";

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss']
})
export class AccountPageComponent implements OnInit {

  userBook:BookModel[] = [];

  userLogged:UsersModel = {
    borrow: {
      borrowDate: new Date(),
      dueDate: new Date(),
      idBook: 0,
      idBorrow: 0,
      idUsers: 0
    },
    email: '',
    firstName: '',
    idUsers: 0,
    lastName: '',
    phone: '',
    password: '',
    reviews: []
  }
  constructor(private userData : UsersDataService, private reviewApi: ReviewServiceService, private bookApi: BookServiceService) { }

  ngOnInit(): void {
    this.userData.subUser$.subscribe(
      item => {
        this.userLogged = item;
      }
    )
    this.reviewApi.getReviewsByUserId(this.userLogged.idUsers).subscribe(
      item => {
        this.userLogged.reviews = item;
        console.log(this.userLogged)
        for(let rev of this.userLogged.reviews){
          this.bookApi.getBook(rev.idBook).subscribe(
            item => {
              console.log(item);
              this.userBook = [...this.userBook, item];
              console.log(this.userBook);
            }
          )
        }
      }
    )


  }
  logoff(){
    window.location.reload();
  }

}
