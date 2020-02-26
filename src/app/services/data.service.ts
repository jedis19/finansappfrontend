import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {tap} from 'rxjs/operators'
import { dataModel } from '../models/dataModel';


@Injectable()
export class DataService {

  constructor(private http:HttpClient) { }

  path="https://myfinansapp.herokuapp.com/get"
  pathSecond="https://myfinansapp.herokuapp.com/rate"
  getDatas(){
    return this.http.get(this.path).pipe(tap(data => {
    }))
  }

  //sendingRates
  sendRatesLineOne(name,rate){
    return this.http.post(this.pathSecond+'/sendratesline1',{name:name,rate:rate}).pipe(tap(data => {
       
    }))
  }

  sendRatesLineTwo(name,rate){
    return this.http.post(this.pathSecond+'/sendratesline2',{name:name,rate:rate}).pipe(tap(data => {
       
    }))
  }

  sendRatesLineThree(name,rate){
    return this.http.post(this.pathSecond+'/sendratesline3',{name:name,rate:rate}).pipe(tap(data => {
       
    }))
  }

  //getting Rates
  getRatesLineOne(){
    return this.http.get(this.pathSecond+"/getratesline1").pipe(tap(data => {

    }))
  }

  
  getRatesLineTwo(){
    return this.http.get(this.pathSecond+"/getratesline2").pipe(tap(data => {
      
    }))
  }

  
  getRatesLineThree(){
    return this.http.get(this.pathSecond+"/getratesline3").pipe(tap(data => {
      
    }))
  }

  
}
