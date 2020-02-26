import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs'

@Injectable()
export class IoService {
  private socket;

  path="https://myfinansapp.herokuapp.com"
  constructor() { 
    this.socket = io(this.path);
  }

  getDatas(){
    let observable = new Observable<{data:string}>(observer => {
      this.socket.on("new datas",(data) => {
        observer.next(data['data']);
      })
    })
    return observable
  }
}
