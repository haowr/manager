import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ValidateService } from '../validate.service';
import {Router} from "@angular/router"

//import { Router } from '@angular/Router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private Validate: ValidateService, private router:Router,
              private Auth: AuthService
    ) { }

  name: string = "";
  username: string = "";
  email: string = "";
  password: string = "";
  phonenumber: string = "";
  errorMessage: string = "";
  passwordCannotBeEmptyMsg: string = "Password Field Cannot Be Empty...";
  phonenumberCannotBeEmptyMsg: string = "Phone Number Field Cannot Be Empty...";
  emailCannotBeEmptyMsg: string = "Email Field Cannot Be Empty...";
  usernameCannotBeEmptyMsg: string = "Username Field Cannot Be Empty...";
  nameCannotBeEmptyMsg: string = "Name Field Cannot Be Empty...";
  unSuccessfulRegistrationMsg: string = "Registration Unsuccessful..."
  successfulRegistrationMsg: string = "Registration Successful"
  invalidEmailMsg: string = "Invalid Email...";
  nameCannotBeEmpty: boolean = false;
  emailCannotBeEmpty: boolean = false;
  userNameCannotBeEmpty: boolean = false;
  passwordCannotBeEmpty: boolean = false;
  phoneNumberCannotBeEmpty: boolean = false;
  loadingRegistration: boolean = false;
  validEmail: boolean = false;
  invalidEmail: boolean = false;
  registrationFailed: boolean = false;
  registrationSuccess: boolean = false;
  registrationFormOpen:boolean = true;
  errorMsg:string = ''


  ngOnInit(): void {
  }

  onRegisterSubmit() {

    const user = {

      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password,
      phonenumber: this.phonenumber

    }

    console.log( user)
    if (this.name == "") {

      this.nameCannotBeEmpty = true;

      setTimeout(() => {

        this.nameCannotBeEmpty = false;

      }, 2000);

    }
    if (this.email == "") {

      this.emailCannotBeEmpty = true;

      setTimeout(() => {

        this.emailCannotBeEmpty = false;

      }, 2000);
    }
    if (this.phonenumber == "") {

      this.phoneNumberCannotBeEmpty = true;

      setTimeout(() => {

        this.phoneNumberCannotBeEmpty = false;

      }, 2000);
    }
    if (this.username == "") {

      this.userNameCannotBeEmpty = true;

      setTimeout(() => {

        this.userNameCannotBeEmpty = false;

      }, 2000);

    }
    if (this.password == "") {

      this.passwordCannotBeEmpty = true;

      setTimeout(() => {

        this.passwordCannotBeEmpty = false;

      }, 2000);
    }
    if (!this.Validate.validateEmail(user.email)) {

      this.invalidEmail = true;

      setTimeout(() => {

        this.invalidEmail = false;
      }, 2000)
      //return false;
    } else {

      this.validEmail = true;

    }

    if (this.name     !==   "" &&
      this.email      !==   "" &&
      this.password   !==   "" &&
      this.username   !==   "" &&
      this.phonenumber!==   "" &&
      this.validEmail) {


      this.loadingRegistration = true;
      this.registrationFormOpen = false;
      // Register user
      this.Auth.registerUser(user).subscribe(data => {
        console.log(data)
       if(data.success){
         // this.flashmessages.show('You are now registered and can log in', {cssClass: 'alert-success', timeout: 3000});
          this.loadingRegistration = false;
          setTimeout(()=>{

            this.registrationSuccess = true;
            this.router.navigate(['/login']);

          },2000)

        } else {
         // this.flashmessages.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
         this.loadingRegistration = false;
        // this.registrationFailed = true;
       // this.registrationFormOpen = true;
         console.log(data)
         if(data.err.code == 11000){


          this.errorMessage = "User Already Exists";

         }else{

           this.errorMessage = "Registration Failed";
         }
         setTimeout(()=>{

          this.registrationFailed = false;
          this.name = "";
          this.email = "";
          this.password ="";
          this.username = "";

         },2000)
          //this.Router.navigate(['/register']);
        }
      });


    }
    // Required Fields
   // if (!this.Validate.validateRegister(user)) {
      // this.flashmessages.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
     // return false;
   // }

    // Validate Email
   // if (!this.Validate.validateEmail(user.email)) {
      //this.flashmessages.show('Please use a valid email', {cssClass: 'alert-danger', timeout: 3000});
    //  return false;
    //}


  }

}

