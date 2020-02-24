import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {
  isLoggedIn;
  constructor(private loginService:LoginService,private router:Router) {
   
    router.events.subscribe((event) => {
      if(event instanceof NavigationStart){
      this.isLoggedIn = this.loginService.isLogged
      }
    })
  }

  ngOnInit(): void {
    
  }

  logOut(){
    this.loginService.logout().subscribe(data => {
      localStorage.removeItem('token');
      this.router.navigate(["login"])
  
     
    })
  }

}
