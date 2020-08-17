import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // tslint:disable-next-line: variable-name
  baseURL = 'https://routeegypt.herokuapp.com/';
  // tslint:disable-next-line: variable-name
  constructor(private _HttpClient: HttpClient)
  // tslint:disable-next-line: no-trailing-whitespace
  { 



  }

  signUp(data):Observable<any>
  {
   return this._HttpClient.post(this.baseURL + 'signup', data)
  }

  signIn(data):Observable<any>
  {
    return this._HttpClient.post(this.baseURL + 'signin', data)
  }

  signOut(data):Observable<any>
  {
    return this._HttpClient.post(this.baseURL + 'signOut', data)
  }
}
