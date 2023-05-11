import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './security/pages/login/login.component';
import {FormsModule} from "@angular/forms";
import {LoginService} from "./security/services/login.service";
import {HttpClientModule} from "@angular/common/http";
import { ProfileComponent } from './profile/pages/profileDetails/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
    ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
