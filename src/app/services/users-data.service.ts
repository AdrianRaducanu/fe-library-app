import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {BookModel} from "../models/book-model.model";
import {UsersModel} from "../models/users-model.model";

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  subUser$ : BehaviorSubject<UsersModel> = new BehaviorSubject<UsersModel>({
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
  });
  constructor() { }
}
