import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  user = {
    username: '',
    email: '',
    secret: '',
    questionAnswer: '',
    gender: ''
  };
  submitted = false;

  @ViewChild('f') signupForm: NgForm | undefined;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];

  constructor() {}

  ngOnInit() {
  }

  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signupForm?.form.patchValue({
      username: suggestedName
    });
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    this.submitted = true;
    this.user.username = this.signupForm?.value.username;
    this.user.email = this.signupForm?.value.email;
    this.user.secret = this.signupForm?.value.secret;
    this.user.questionAnswer = this.signupForm?.value.questionAnswer;
    this.user.gender = this.signupForm?.value.gender;
    this.signupForm?.reset();
  }

}
