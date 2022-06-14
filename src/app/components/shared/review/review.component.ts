import {Component, Input, OnInit} from '@angular/core';
import {ReviewModel} from "../../../models/review-model.model";
import {ReviewServiceService} from "../../../services/review-service.service";
import {UsersModel} from "../../../models/users-model.model";
import {BorrowModel} from "../../../models/borrow-model.model";

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  @Input() review:ReviewModel = {
    fullReview:'',
    idBook: 0,
    idReview:0,
    idUsers:0,
    stars: 0
  }
  user: UsersModel ={
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
  } ;
  constructor(private reviewApi:ReviewServiceService) { }

  ngOnInit(): void {
    this.reviewApi.getUserByReviewId(this.review.idReview).subscribe(
      item => this.user = item
    )
  }

}
