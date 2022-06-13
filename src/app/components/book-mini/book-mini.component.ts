import {Component, Input, OnInit} from '@angular/core';
import {BookModel} from "../../models/book-model.model";

@Component({
  selector: 'app-book-mini',
  templateUrl: './book-mini.component.html',
  styleUrls: ['./book-mini.component.scss']
})
export class BookMiniComponent implements OnInit {

  toggleVar:boolean = false;
  @Input() book:BookModel = {
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
  };

  constructor() { }

  ngOnInit(): void {
    //console.log(this.book);
  }
  toggle():void{
    this.toggleVar = true;
  }
  toggleParent(x : boolean){
    this.toggleVar = false;
  }

}
