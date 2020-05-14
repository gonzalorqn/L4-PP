import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from "@angular/router";
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: string = "";
  email: string = "";
  password: string = "";
  displayModal: boolean = false;
  message: string = "";

  constructor(public auth: AngularFireAuth, private router: Router) { }

  ngOnInit(): void {
  }

  public signup()
  {
    if(this.user !== "")
    {
      this.auth.createUserWithEmailAndPassword(this.email, this.password)
      .then(data => {
        var user = firebase.auth().currentUser;
        user.updateProfile({
          displayName: this.user
        });
        this.router.navigateByUrl('/login');
      })
      .catch(e => {
        this.message = e.message;
        this.displayModal = true;
      });
    }
    else
    {
      this.message = "Username not given.";
      this.displayModal = true;
    }    
  }

}
