import { Component } from '@angular/core';
import {BookServiceService} from "./services/book-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'user-app';

  constructor(private bookService: BookServiceService) {
    this.bookService.getAllBooks().subscribe( data => {
      console.log(data);
    })
  }
}
