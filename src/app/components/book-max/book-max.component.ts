import {Component, Input, OnInit} from '@angular/core';
import {BookModel} from "../../models/book-model.model";
import { Output, EventEmitter } from '@angular/core';
import {ReviewModel} from "../../models/review-model.model";
import {ReviewServiceService} from "../../services/review-service.service";
import {BorrowServiceService} from "../../services/borrow-service.service";
import {BorrowModel} from "../../models/borrow-model.model";
import {UsersDataService} from "../../services/users-data.service";
import {UsersModel} from "../../models/users-model.model";

@Component({
  selector: 'app-book-max',
  templateUrl: './book-max.component.html',
  styleUrls: ['./book-max.component.scss']
})
export class BookMaxComponent implements OnInit {

  reviews:ReviewModel[] = [];
  isReserved:boolean = false;
  hasReserved:boolean = false;

  @Output() newItemEvent = new EventEmitter<boolean>();

  falseVar: boolean = false;
  actualUser : UsersModel = {
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
  };

  @Input() book:BookModel = {
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
  };
  constructor(private reviewApi: ReviewServiceService, private borrowApi:BorrowServiceService, private userData:UsersDataService ) { }

  ngOnInit(): void {
    this.userData.subUser$.subscribe(
      item => {this.actualUser = item;
      console.log(this.actualUser)
    })

    this.borrowApi.getBorrowByBookId(this.book.idBook).subscribe(
      item => {
        item.idBorrow === null ? this.isReserved = false : this.isReserved = true
      }
    )

    this.borrowApi.getBorrowByUserId(this.actualUser.idUsers).subscribe(
      item => {
        console.log(item);
        item.idBorrow ? this.hasReserved = true : this.hasReserved = false
      }
    )

    this.reviewApi.getReviewsByBookId(this.book.idBook).subscribe(
      item => {
        this.reviews = item;
        console.log(this.reviews);
      }
    )
  }

  toggleParent(falseVar : boolean){
    this.newItemEvent.emit(falseVar);
  }

  createBorrow(){
    if(!this.isReserved){
      this.userData.subUser$.subscribe(
        item => this.actualUser = item
      )

      this.borrowApi.createNewBorrow(this.book.idBook, this.actualUser.idUsers).subscribe(
        item => console.log(item)
      )
    }
    this.toggleParent(false);
  }
}
