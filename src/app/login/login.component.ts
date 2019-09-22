import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitForm: FormGroup;
  validMessage: String = "";
  invalidMessage: String = "";

  constructor(private router: Router) {
    this.submitForm = new FormGroup({
      email: new FormControl('', Validators.compose([
    		Validators.required,
    		Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    	])),
      password: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
  }

  async login() {
    let that = this;
    if (this.submitForm.valid) {
      console.log(this.submitForm.value);
      this.validMessage = "Signing in...";
      this.invalidMessage = "";
      // setTimeout(() => {
      //   that.router.navigate(['/update']);
      // }, 2000);
    } else {
      this.validMessage = "";
      this.invalidMessage = "Please check that all fields are complete and correct.";
    }
  }

}
