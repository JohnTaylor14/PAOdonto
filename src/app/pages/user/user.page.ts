import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "src/app/pages/shared/authentication-service";

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  constructor(public authService: AuthenticationService) { }

  ngOnInit() {
  }

  logout(){
    this.authService.SignOut()
  }
}
