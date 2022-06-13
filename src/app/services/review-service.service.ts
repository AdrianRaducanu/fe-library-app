import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ReviewModel} from "../models/review-model.model";
import {BookModel} from "../models/book-model.model";
import {UsersModel} from "../models/users-model.model";

@Injectable({
  providedIn: 'root'
})
export class ReviewServiceService {

  urlReview:String = "http://localhost:8080/review/";

  constructor(private http:HttpClient) { }

  getReviewsByBookId(idBook: number):Observable<ReviewModel[]>{
    return this.http.get<ReviewModel[]>(this.urlReview +"getReviewsByIdBook?idBook=" +idBook.toString());
  }

  getUserByReviewId(idReview: number):Observable<UsersModel>{
    return this.http.get<UsersModel>(this.urlReview + "getUserByReviewId?idReview=" + idReview.toString());
  }
}
