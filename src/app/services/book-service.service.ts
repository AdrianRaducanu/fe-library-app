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

  getAllBooks():Observable<BookModel[]>{
    return this.http.get<BookModel[]>(this.urlBook + 'getAllBooks');
  }

  getBookWithTitleOrAuthorLike(titleOrAuthor : String):Observable<BookModel[]>{

    return this.http.get<BookModel[]>(this.urlBook + 'getBookWithTitleOrAuthorLike?titleOrAuthor=' + titleOrAuthor);

  }

  getBestBooks():Observable<BookModel[]>{
    return this.http.get<BookModel[]>(this.urlBook + 'getBooksSortedByAvgStar');
  }

}
