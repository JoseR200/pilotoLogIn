import {Component, OnInit} from '@angular/core';
import {User} from "../models/user";
import {UserService} from "../loginService/user.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  user:User;

  constructor(private userService: UserService) {
    this.user = {} as User;
  }

  ngOnInit(): void {
    this.userService.get().subscribe((response: any) => {
      console.log(response);
    });
  }
}