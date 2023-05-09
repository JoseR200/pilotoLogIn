import { Component } from '@angular/core';
import {UserService} from "../loginService/user.service";
import {User} from "../models/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: any;

  constructor(private userService: UserService, private router: Router) {
    this.user = {} as User;
  }

  onSubmit() {
    this.userService.create(this.user).subscribe((response: any) => {
      localStorage.setItem('token', response.token);
      this.router.navigate(['/profile']);
    }, error => {
      console.log(error);
    });
  }
}
