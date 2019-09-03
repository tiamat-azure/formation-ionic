import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login: string;
  password: string;

  constructor( private router:Router) { }

  ngOnInit() {
  }

  show(){
    console.log("Login = " + this.login + ", password = " + this.password);
    if(this.login != null && this.login == this.password){
      this.router.navigate(["/home"]);
    } else {
      console.log("Erreur");
    }
  }

}
