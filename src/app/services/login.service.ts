import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import {tap} from 'rxjs/operators'
import { Router } from '@angular/router';


@Injectable()
export class LoginService {

  path="https://myfinansapp.herokuapp.com/auth"
  constructor(private http:HttpClient,private router:Router) { }

  login(user:User){
    return this.http.post<User>(this.path+"/login",user).pipe(tap( data => {
 
    }))
  }

  logout(){
    return this.http.post(this.path+"/logout",null).pipe(tap(data => {

    }))
  }

  getStatus(){
    return this.http.get(this.path+'/userlogin').pipe(tap(data => {

    }))
  }

  get isLogged(){
    return !! localStorage.getItem('token')
  }

 
}
