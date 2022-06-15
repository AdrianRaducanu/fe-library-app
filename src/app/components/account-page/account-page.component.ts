import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {UsersDataService} from "../../services/users-data.service";
import {UsersModel} from "../../models/users-model.model";
import {ReviewServiceService} from "../../services/review-service.service";
import {BookServiceService} from "../../services/book-service.service";
import {BookModel} from "../../models/book-model.model";
import {BorrowServiceService} from "../../services/borrow-service.service";

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss']
})
export class AccountPageComponent implements OnInit {

  @Output() refresh = new EventEmitter<number>();

  userBook:BookModel[] = [];
  dueDate:Date = new Date();

  reviewText: String = "";
  reviewNote: number = 0;

  bookBorrowed: BookModel={
    author: "",
    available: true,
    avgStar: 0,
    description: "",
    idBook: 0,
    image: "",
    imgPaths: "",
    reviews: [],
    title: "",
    category: "",
    borrow:{
      borrowDate: new Date(),
      dueDate: new Date(),
      idBook: 0,
      idBorrow: 0,
      idUsers: 0,
    }
  }

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
  constructor(
    private userData : UsersDataService,
    private reviewApi: ReviewServiceService,
    private bookApi: BookServiceService,
    private borrowApi: BorrowServiceService
  ) { }

  ngOnInit(): void {
    this.userData.subUser$.subscribe(
      item => {
        this.userLogged = item;
        this.borrowApi.getBorrowByUserId(item.idUsers).subscribe(
          itemB => {
            console.log(itemB);
            this.userLogged.borrow = itemB;
            this.dueDate = itemB.dueDate;
            this.borrowApi.getBookByBorrowId(this.userLogged.borrow.idBorrow).subscribe(
              itemC => {
                console.log(itemC);
                this.bookBorrowed = itemC;
              }
            )
          }
        )
      }
    )
    this.reviewApi.getReviewsByUserId(this.userLogged.idUsers).subscribe(
      item => {
        this.userLogged.reviews = item;
        console.log(this.userLogged)

        for(let rev of this.userLogged.reviews){
          this.reviewApi.getBookByReviewId(rev.idReview).subscribe(
            itemB => {
              console.log(itemB);
              this.userBook = [...this.userBook, itemB];
            }
          )
        }
      }
    )


  }
  reviewStar(x:number){
    this.reviewNote = x;
    console.log(this.reviewNote);
  }
  consoleBorrow(){
    console.log(this.userLogged.borrow);
  }
  saveReview(){
    if(this.reviewText){
      this.reviewApi.saveReview(this.bookBorrowed.idBook, this.userLogged.idUsers, this.reviewText, this.reviewNote).subscribe(
        item => console.log(item)
      )
    }
    this.refresh.emit(1);
  }
  removeBorrow(){
    console.log(this.userLogged.borrow.idBorrow)

    this.borrowApi.deleteBorrowByIdBorrow(this.userLogged.borrow.idBorrow).subscribe(
      item => console.log(item)
    )
    this.refresh.emit(1);

  }
}
