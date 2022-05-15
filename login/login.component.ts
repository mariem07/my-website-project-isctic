import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AuthService } from '../auth.service'; 
import { User } from 'C:/Users/marie/Desktop/skatini/src/app/user.model'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: string = '';
  values: any[] = [];
  userFound: any[] = [];
  userSub: any;
  connected: boolean = false;

  constructor(private router: Router, private logserv: AuthService, private http: HttpClient) { }
  user = new Subject<User>()
  subb(form: NgForm) {
    if (!form.valid) { return; }
    const name = form.value.name;
    const password = form.value.password;
    return this.logserv.login(name, password).subscribe(
      resData => {
        console.log("successA");
        console.log(this.userFound[0]);
        this.values = Object.keys(this.userFound[0]).map(key => this.userFound[0][key]);
        console.log(this.values);
        for (let i = 0; i < this.values.length; i++) {
          if (this.values[i].name === name) {
            console.log("success de login");
            this.connected = true;
            this.router.navigate(['/home']);
          }
          else {
          }
        }
      }, error => {
        console.log(error);
        this.error = error.error.error.message;
      }
    );
  }
  onFound() {
    this.http.get('https://skatini-66a5c-default-rtdb.firebaseio.com/user.json').
      subscribe(responseData => {
        this.userFound.push(responseData);
        console.log("onfound executed");
        console.log(this.userFound);
      })
  }
  ngOnInit(): void {
    this.userSub = this.logserv.user.subscribe();
  }

  goToSign() {
    this.router.navigate(["/signin"])
  }



}