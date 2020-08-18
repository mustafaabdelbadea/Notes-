import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private _Router: Router) { 
    if ( !localStorage.getItem("token"))
    {
      this._Router.navigate(['/signin']);
    }
    
  }
  logout(){
    localStorage.removeItem('token');
    window.location.reload();
  
  }
  ngOnInit(): void {
  }

}
