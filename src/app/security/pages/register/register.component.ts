import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {User} from "../../models/user";
import {RegisterService} from "../../services/register.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: User;

  constructor(private registerService: RegisterService, private router: Router, private auth: AuthService) {
    this.user = {} as User;
  }

  onSubmit() {
    this.registerService.create(this.user).subscribe((response: any) => {
      this.auth.login(response.token);
      this.router.navigate(['/login']);
    });
  }
}
