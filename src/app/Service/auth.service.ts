import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // tslint:disable-next-line: variable-name
  baseURL = 'https://routeeypt.herokuapp.com/';
  // tslint:disable-next-line: variable-name
  constructor(private _HttpClient: HttpClient)
  // tslint:disable-next-line: no-trailing-whitespace
  { 



  }

  signUp(data){
    this._HttpClient.post(this.baseURL + 'signup', data)
  }

  signIn(data){
    this._HttpClient.post(this.baseURL + 'signin', data)
  }

  signOut(data){
    this._HttpClient.post(this.baseURL + 'signOut', data)
  }
}
