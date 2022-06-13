import { Injectable } from '@angular/core';
import {BookModel} from "../models/book-model.model";
import {BehaviorSubject, Observable, of, Subject} from "rxjs";
import {BookServiceService} from "./book-service.service";

@Injectable({
  providedIn: 'root'
})
export class BookDataService {

  subBook$ : BehaviorSubject<BookModel[]> = new BehaviorSubject<BookModel[]>([]);

  constructor(private bookApi: BookServiceService) {
    this.bookApi.getAllBooks().subscribe(
      item => {
        this.subBook$?.next(item)
      }
    )

  }

}
