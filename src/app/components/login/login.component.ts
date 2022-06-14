import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core'
import {UsersServiceService} from "../../services/users-service.service";
import {UsersDataService} from "../../services/users-data.service";
import {UsersModel} from "../../models/users-model.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<boolean>();

  email:String = "";
  password: String = "";
  firstName: String ="";
  lastName: String ="";
  phone: String="";
  error: boolean = false;
  createToggle: boolean = false;

  newUser: UsersModel = {
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
  }

  constructor(
    private usersApi:UsersServiceService,
    private usersData: UsersDataService) { }

  ngOnInit(): void {
  }

  login():void{
    let isCorrect:boolean = false;
    this.usersApi.checkEmailAndPassword(this.email, this.password).subscribe(
      item => {
        isCorrect = item;
        console.log(isCorrect)
        if(isCorrect){
          this.usersApi.getUserByEmail(this.email).subscribe(
            item => {
              this.usersData.subUser$.next(item);
              console.log(this.usersData.subUser$);
            }
          );
          this.newItemEvent.emit(true);

        }else{
          this.error = true;
        }
      }
    )

  }
  signUp(){
    this.createToggle = true;
  }
  back(){
    this.createToggle = false;
  }
  create(){
    this.newUser.email = this.email;
    this.newUser.firstName = this.firstName;
    this.newUser.lastName = this.lastName;
    this.newUser.password = this.password;
    this.newUser.phone = this.phone;
    console.log(this.newUser)
    this.usersApi.createNewUser(this.newUser).subscribe(
      item => {
        this.usersData.subUser$.next(item);
        this.newItemEvent.emit(true);
      }
    )
  }
}
