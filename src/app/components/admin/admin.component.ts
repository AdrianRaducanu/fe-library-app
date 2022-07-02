import { Component, OnInit } from '@angular/core';
import {BookServiceService} from "../../services/book-service.service";
import {BookModel} from "../../models/book-model.model";
import {UsersModel} from "../../models/users-model.model";
import {UsersServiceService} from "../../services/users-service.service";
import {BorrowServiceService} from "../../services/borrow-service.service";
import {BorrowModel} from "../../models/borrow-model.model";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  swapPage:number = 1;

  title: String = "";
  author: String = "";
  category: String ="";
  img: String ="";
  description: String="";

  books: BookModel[] = [];
  users: UsersModel[] = [];
  borrows: BorrowModel[] = [];

  constructor(private bookApi: BookServiceService, private userApi: UsersServiceService, private borrowApi: BorrowServiceService) { }

  ngOnInit(): void {
  }

  goBook(){
    this.swapPage = 1;
  }
  saveBook(){
    this.bookApi.saveBook(this.title,this.author,this.description,this.category,this.img).subscribe(
      item => console.log(item)
    )
    this.img = "";
    this.author="";
    this.category="";
    this.title="";
    this.description="";
  }
  goAllBooks(){
    this.swapPage = 2;
    this.bookApi.getAllBooks().subscribe(
      item => this.books = item
    )
  }
  goAllUsers(){
    this.userApi.getAllUsers().subscribe(
      item => {
        this.users = item.filter( data => data.email !== 'account@admin.ro');
      }
    )
    this.swapPage = 3;
  }
  goDueDate(){
    this.users = [];
    this.borrowApi.getAllBorrow().subscribe(
      item => {
        const today = new Date();
        this.borrows = item.filter(data =>
           new Date(data.dueDate) > today
        );
        for (let b of this.borrows){
          this.borrowApi.getUserByBorrowId(b.idBorrow).subscribe(
            itemB => this.users = [...this.users,itemB]
          )
        }
      }
    )
    this.swapPage = 4;
  }
}

