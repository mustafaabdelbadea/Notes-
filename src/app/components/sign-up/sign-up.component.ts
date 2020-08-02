import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
declare var $: any;
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor() {
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
         console.log(this.signUp);
      }
    }
  ngOnInit(): void {
    $('#signUp').particleground();

  }

}
