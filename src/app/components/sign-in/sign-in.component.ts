import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('#signIn').particleground();

  }

}
