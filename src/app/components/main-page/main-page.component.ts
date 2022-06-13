import { Component, OnInit } from '@angular/core';
import {BookServiceService} from "../../services/book-service.service";
import {BookModel} from "../../models/book-model.model";
import {BookDataService} from "../../services/book-data.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  toggleVar: boolean = true;
  bestBooks : BookModel[] = [];

  constructor(
    private bookApi: BookServiceService,
    private bookData : BookDataService
  ) {}

  ngOnInit(): void {
    this.bookApi.getBestBooks().subscribe(
      item => this.bestBooks = item
    )
  }

  toggle():void{
    this.toggleVar = !this.toggleVar;
  }
}
