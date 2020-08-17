import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { AuthService } from 'src/app/Service/auth.service';

declare var $: any;
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {


  isClicked = false;
  responseMessage = "";
  isSuccess = false;
  isUniuqeEmail = false;
  isUniuqeEmailMessage = "";
  constructor(private _AuthService: AuthService) {
  }

  signUp = new FormGroup(
    {
      first_name: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/)]),
      last_name: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      age: new FormControl('', Validators.required),
      password: new FormControl('', [ Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)])

    }
  );
    FormData(){

      if (this.signUp.valid)
      {
        //  console.log(this.signUp);
        this.isClicked = true;
        this._AuthService.signUp(this.signUp.value).subscribe(response => {
          if (response.message == "success"){
            this.responseMessage = response.message;
            this.isClicked = false; 
            this.isUniuqeEmail = false; 
            this.isSuccess = true;
            this.signUp.reset();
          }
          else{
            this.isUniuqeEmailMessage = response.errors.email.message;
            this.isUniuqeEmail = true; 
            this.isSuccess = false;
            this.isClicked=false;
          }

        });
      }
    }
  ngOnInit(): void {
    $('#signUp').particleground();

  }

}
