import { Injectable } from '@angular/core';
import {SharedService} from "../../shared/services/shared.service";
import {User} from "../../security/models/user";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService extends SharedService<User>{

  constructor(http: HttpClient) {
    super(http);
    this.basePath = this.basePath + 'profile';
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `${localStorage.getItem('token')}`
      })
    };
  }
}
