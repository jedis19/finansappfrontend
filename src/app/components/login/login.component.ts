import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  errorMessage;
  model:User = new User();
  showError;
  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit(): void {
  }

  loggin(model:User){
    this.loginService.login(model).subscribe(data => {
      this.showError = data['showError'];
      localStorage.setItem('token',"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.e30.DJp984NthB0_9u2HkZ_ArkSWxKFlmNWupTEb8mdHwqY");
      this.router.navigate([""])
    },(error) => {
      this.errorMessage = error['error']['message'];
      this.showError = error['error']['showError'];
    })
  }

}
