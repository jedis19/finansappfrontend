import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, NavigationStart } from '@angular/router';
import { Injectable } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';


@Injectable()
export class LoginGuard implements CanActivate {
 
    constructor(private loginService:LoginService,private router:Router){
    
      
    }

    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean{
        
        let logged = this.loginService.isLogged
        if(logged){
            return true;
        }
        this.router.navigate(["login"])
        alert('bu özelliği kullanmak için giriş yap')
        return false;
    }   
}