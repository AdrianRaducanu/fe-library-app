import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {BorrowModel} from "../models/borrow-model.model";
import {UsersModel} from "../models/users-model.model";
import {HttpClient} from "@angular/common/http";
import {BookModel} from "../models/book-model.model";

@Injectable({
  providedIn: 'root'
})
export class BorrowServiceService {

  urlBorrow:String = "http://localhost:8080/borrow/";
  constructor(private http: HttpClient) { }

  createNewBorrow(idBook: number, idUser:number):Observable<BorrowModel>{
    return this.http.post<BorrowModel>(this.urlBorrow + "saveBorrow?idBook=" + idBook.toString() + "&idUser=" + idUser.toString(), {});
  }

  getBorrowByBookId(idBook:number):Observable<BorrowModel>{
    return this.http.get<BorrowModel>(this.urlBorrow + "getBorrowByIdBook?idBook=" + idBook.toString());
  }

  getBorrowByUserId(idUser: number):Observable<BorrowModel>{
    return this.http.get<BorrowModel>(this.urlBorrow + "getBorrowByIdUser?idUsers=" + idUser.toString());
  }

  getBookByBorrowId(idBorrow: number):Observable<BookModel>{
    return this.http.get<BookModel>(this.urlBorrow + "getBookByIdBorrow?idBorrow=" + idBorrow);
  }

  deleteBorrowByIdBorrow(idBorrow: number):Observable<any>{
    return this.http.delete<any>(this.urlBorrow + "deleteByIdBorrow?idBorrow=" + idBorrow);
  }
}
