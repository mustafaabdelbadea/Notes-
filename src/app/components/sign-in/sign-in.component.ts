import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Service/auth.service';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  constructor( private _AuthService: AuthService , private _Router: Router) { }

  signIn = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [ Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)])
    }
  );
    FormData(){

        this._AuthService.signIn(this.signIn.value).subscribe(res => {

          // tslint:disable-next-line: triple-equals
          if (res.message == 'success')
          {
            localStorage.setItem('token', res.token);

            this._Router.navigateByUrl('/profile');
          }
         else{
           alert('Invalid Email or Password');
         }

        },
        err => {
          console.log(err);
        });
      }



  ngOnInit(): void {
    $('#signIn').particleground();

  }

}
