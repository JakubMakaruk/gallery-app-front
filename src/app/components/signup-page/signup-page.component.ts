import { Component } from '@angular/core';
import {HttpResponse} from "@angular/common/http";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent {

  constructor(private authService: AuthService, private router: Router) {
  }

  onSignUpButtonClick(email: string, password: string) {
    this.authService.signup(email, password).subscribe((res: HttpResponse<any>) => {
      console.log(res);
      if (res.status === 200) {
        this.router.navigate(['/galleries']);
      }
    });
  }
}
