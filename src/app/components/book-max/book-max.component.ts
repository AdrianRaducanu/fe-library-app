import {Component, Input, OnInit} from '@angular/core';
import {BookModel} from "../../models/book-model.model";
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book-max',
  templateUrl: './book-max.component.html',
  styleUrls: ['./book-max.component.scss']
})
export class BookMaxComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<boolean>();
  falseVar: boolean = false;
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
  }

  toggleParent(falseVar : boolean){
    this.newItemEvent.emit(falseVar);
  }
}
