import {Component, OnInit} from '@angular/core';
import {BookServiceService} from "./services/book-service.service";
import {UsersServiceService} from "./services/users-service.service";
import {BookDataService} from "./services/book-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'user-app';

  constructor() {}

  ngOnInit() {

  }

}
