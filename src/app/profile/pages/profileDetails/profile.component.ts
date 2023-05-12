import {Component, OnInit} from '@angular/core';
import {User} from "../../../security/models/user";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import {AuthService} from "../../../security/services/auth.service";

@Component({
  selector: 'app-profileDetails',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  user:User;

  constructor(private userService: UserService, private router: Router, private auth: AuthService) {
    this.user = {} as User;
  }

  ngOnInit(): void {
    this.userService.get().subscribe((response: any) => {
      this.user=response.user;
      console.log(this.user)
    });
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
