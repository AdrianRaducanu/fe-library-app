import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  urlUsers:String = "http://localhost:8080/users/";

  constructor(private http:HttpClient) { }

  getAllUsers(){
    return this.http.get(this.urlUsers + 'getAllUsers');
  }
}
