import { Injectable } from '@angular/core';
import {SharedService} from "../../services/shared.service";
import {User} from "../models/user";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService extends SharedService<User>{

  constructor(http: HttpClient) {
    super(http);
    this.basePath = this.basePath + 'user';
  }
}
