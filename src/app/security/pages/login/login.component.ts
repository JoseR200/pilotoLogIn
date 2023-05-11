import { Component } from '@angular/core';
import {LoginService} from "../../services/login.service";
import {User} from "../../models/user";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: any;

  constructor(private userService: LoginService, private router: Router, private auth: AuthService) {
    this.user = {} as User;
  }

  onSubmit() {
    this.userService.create(this.user).subscribe((response: any) => {
      this.auth.login(response.token);
      this.router.navigate(['/profile']);
    }, error => {
      console.log(error);
    });
  }
}
