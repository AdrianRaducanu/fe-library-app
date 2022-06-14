import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import {UsersModel} from "../models/users-model.model";

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  urlUsers:String = "http://localhost:8080/users/";

  constructor(private http:HttpClient) { }

  getAllUsers():Observable<UsersModel[]>{
    return this.http.get<UsersModel[]>(this.urlUsers + 'getAllUsers');
  }
  getUserByEmail(email: String):Observable<UsersModel>{
    return this.http.get<UsersModel>(this.urlUsers + "getUserByEmail?email=" + email);
  }
  checkEmailAndPassword(email : String, password:String):Observable<boolean>{
    return this.http.get<boolean>(this.urlUsers + "auth?email=" +email + "&password=" + password);
  }
  createNewUser(user: UsersModel):Observable<UsersModel>{
    return this.http.post<UsersModel>(this.urlUsers + "saveUser", {
      "firstName": user.firstName,
      "lastName": user.lastName,
      "email": user.email,
      "phone": user.phone,
      "password": user.password
    });
  }
}
