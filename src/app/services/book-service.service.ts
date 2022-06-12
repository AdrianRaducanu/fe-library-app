import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  urlBook:String = "http://localhost:8080/book/";


  constructor(private http:HttpClient) { }

  getAllBooks(){
    return this.http.get(this.urlBook + 'getAllBooks');
  }
}
