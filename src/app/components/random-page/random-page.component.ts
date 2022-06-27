import { Component, OnInit } from '@angular/core';
import {ReviewServiceService} from "../../services/review-service.service";
import {UsersDataService} from "../../services/users-data.service";
import {BookServiceService} from "../../services/book-service.service";
import {ReviewModel} from "../../models/review-model.model";
import {BookModel} from "../../models/book-model.model";

@Component({
  selector: 'app-random-page',
  templateUrl: './random-page.component.html',
  styleUrls: ['./random-page.component.scss']
})
export class RandomPageComponent implements OnInit {

  userId : number = 0;
  revs: ReviewModel[] = [];
  books: BookModel[] = [];
  categories: String[] =[];
  randomCat: String = "";
  weight: number[] = [];
  randomBook: BookModel = {
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
  constructor(private reviewApi: ReviewServiceService, private userData: UsersDataService, private bookApi: BookServiceService) { }

  ngOnInit(): void {
    this.userData.subUser$.subscribe(
      item => {
        this.userId = item.idUsers;
        this.reviewApi.getReviewsByUserId(this.userId).subscribe(
          itemB => {
            this.revs = itemB;
            for(let rev of this.revs){
              this.reviewApi.getBookByReviewId(rev.idReview).subscribe(
                itemC => {
                    this.books = [...this.books, itemC]
                }
              )
            }
          }
        )
      }
    )
  }

  generateRand(){

      console.log(this.books);
      for(let book of this.books){
        console.log(this.categories.indexOf(book.category))
        let x = this.categories.indexOf(book.category);
        if(x !== -1){
          console.log("x e bun")
          this.weight[x] ++;
        }else{
          console.log("x nu e buun")
          this.categories.push(book.category);
          this.weight.push(1);
        }
      }
      console.log(this.categories);
      console.log(this.weight);


    if(!this.categories.length){
      this.bookApi.getRandom(this.randomCat).subscribe(
        item => this.randomBook = item
      )
    }else{
      let cumulativeWeights:number[] = [];
      for (let i = 0; i < this.weight.length; i += 1) {
        cumulativeWeights[i] = this.weight[i] + (cumulativeWeights[i - 1] || 0);
      }
      const maxCumulativeWeight = cumulativeWeights[cumulativeWeights.length - 1];
      const randomNumber = maxCumulativeWeight * Math.random();

      for (let itemIndex = 0; itemIndex < this.categories.length; itemIndex += 1) {
        if (cumulativeWeights[itemIndex] >= randomNumber) {
          this.randomCat = this.categories[itemIndex];
          console.log(this.randomCat)
          break;
        }
      }
      this.bookApi.getRandom(this.randomCat).subscribe(
        item => this.randomBook = item
      )
    }
    this.categories = [];
    this.weight = []
  }

}
