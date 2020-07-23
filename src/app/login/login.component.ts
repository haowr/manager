import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {Router} from "@angular/router"



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authservice: AuthService,
              private router: Router) { }

  username: string = "";
  password: string = "";
  userName: string;
  errorMsg: String;
  successfulLoginMsg: string = "Login Successful...";
  unSuccessfulLoginMsg: string = "Login Unsuccessful...";
  successfulLogin: boolean = false;
  unSuccessfulLogin: boolean = false;
  userNameCannotBeEmpty: boolean = false;
  registrationFailMsg:string = ""
  passwordCannotBeEmpty: boolean = false;
  loadingLogin: boolean = false;
  userNameCannotBeEmptyMsg: string = "Username Cannot Be Empty..."
  passwordCannotBeEmptyMsg: string = "Password Cannot Be Empty..."

  onLoginSubmit() {

    console.log(this.username);
    const user = {

      username: this.username,
      password: this.password

    }

    if (this.username == "") {
      this.loadingLogin = false;
      this.userNameCannotBeEmpty = true;
      setTimeout(() => {


        this.userNameCannotBeEmpty = false;

      }, 2000);

    }
    if (this.password == "") {
      this.loadingLogin = false;
      this.passwordCannotBeEmpty = true;
      setTimeout(() => {

        this.passwordCannotBeEmpty = false;

      }, 2000)

    }

    if (this.password !== "" && this.username !== "") {
      this.loadingLogin = true;


      this.authservice.authenticateUser(user).subscribe(data => {

        console.log(data);

        if (data.success) {
          this.loadingLogin = false;
          this.successfulLogin = true;
          //this.authservice.storeUserData(data.token, user);
          //this.authservice.updateGlobalUsername(data.name);
          this.userName = this.authservice.userName
         // this.authservice.storeUsername();



          setTimeout(() => {

            this.successfulLogin = false;

          }, 2000);

          setTimeout(() => {

            this.router.navigate(['/clients']);

          }, 3000);

        } else {

          console.log("failed login");
          console.log(data)
          this.loadingLogin = false;
          this.errorMsg = data.message;
          this.unSuccessfulLogin = true;

          setTimeout(() => {

            this.unSuccessfulLogin = false;

          }, 3000);


        }

      })


    }





  }
  ngOnInit(): void {
  }

}
