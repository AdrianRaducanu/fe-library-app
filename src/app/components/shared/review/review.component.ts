import {Component, Input, OnInit} from '@angular/core';
import {ReviewModel} from "../../../models/review-model.model";

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
  constructor() { }

  ngOnInit(): void {
  }

}
