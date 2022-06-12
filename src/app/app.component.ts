import { Component } from '@angular/core';
import {BookServiceService} from "./services/book-service.service";
import {UsersServiceService} from "./services/users-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'user-app';

  constructor(private bookService: BookServiceService, private usersService: UsersServiceService) {
    this.usersService.getAllUsers().subscribe( data => {
      console.log(data);
    })
  }
}
