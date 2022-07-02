import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import {Observable} from "rxjs";
import {BookModel} from "../models/book-model.model";

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  urlBook:String = "http://localhost:8080/book/";


  constructor(private http:HttpClient) { }

  getBook(idBook : number):Observable<BookModel>{
    return this.http.get<BookModel>(this.urlBook + "getBookByIdBook?idBook=" + idBook.toString());
  }

  getAllBooks():Observable<BookModel[]>{
    return this.http.get<BookModel[]>(this.urlBook + 'getAllBooks');
  }

  getBookWithTitleOrAuthorLike(titleOrAuthor : String):Observable<BookModel[]>{

    return this.http.get<BookModel[]>(this.urlBook + 'getBookWithTitleOrAuthorLike?titleOrAuthor=' + titleOrAuthor);

  }

  getBestBooks():Observable<BookModel[]>{
    return this.http.get<BookModel[]>(this.urlBook + 'getBooksSortedByAvgStar');
  }

  getRandom(category: String):Observable<BookModel>{
    return this.http.get<BookModel>(this.urlBook + "getRandomBook?category=" + category);
  }

  saveBook(title: String, author:String, description:String, category:String, img:String):Observable<any>{
    return this.http.post<any>(this.urlBook + "createNewBook", {
      "title": title,
      "author": author,
      "avgStar": 0,
      "description": description,
      "category": category,
      "image": img
    })
  }


}
