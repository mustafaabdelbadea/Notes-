import { Injectable } from '@angular/core';
import{CanActivate, ɵangular_packages_router_router_a, Router} from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  canActivate():boolean|Observable<boolean>{
    var token=localStorage.getItem('token');
    if(token){
      return true;
    }
    this._Router.navigateByUrl("/signin");
    return false;
  }
    constructor(private _Router:Router) { }

}
